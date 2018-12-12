"use strict";

var FXQ = {

    //签章颜色定义
    colors: ['red','blue','#000'],

//签章字体定义
    fonts: ['SimSun','YouYuan','KaiTi'],


    baseConf: {
        color: null,
        font: null,
    },

    commonMethod: function(cType,fType) {

        var color = null;
        color = this.colors[cType];
        if (color === undefined || color == 'undefined') {
            color = this.colors[0];
        }

        var font = this.fonts[fType];
        if (font === undefined || font == 'undefined') {
            font = this.fonts[0];
        }

        this.baseConf.color = color;
        this.baseConf.font = font;

    },

    /**
     *
     * @param company 公司名称
     * @param cType 颜色 0.红  1. 蓝色 2.其他
     * @param fType 字体 0.宋体
     * @param sType 签章类型 0.公章 1.合同专用章
     * @param seaNo  这个是签章的序列号
     */
    companySeal: function (company,cType,fType,sType,seaNo) {

        console.log("sdfsdf")
        //获取canvans doc对象
        var canvas = document.getElementById('canvas');

        var context = canvas.getContext('2d');

        this.commonMethod(cType,fType);

        var width = canvas.width/2;
        var height = canvas.height/2;

        //画圆方法
        drawCircle()

        draw5Start(30,0)

        drawTitle();

        writeSerNo(seaNo)

        writeFont(company)

        //返回图片base64
        return canvas.toDataURL();



        /**
         * 画圆的方法
         * color : 圆边框的颜色
         * lineWidth: 线条宽度
         */
        function drawCircle() {
            context.translate(0,0);
            context.lineWidth = 5;
            context.strokeStyle=FXQ.baseConf.color;
            context.beginPath();
            context.arc(width,height,110,0,Math.PI*2);
            context.stroke();
            context.save();
            var data = canvas.toDataURL("image/jpeg")
            console.log(canvas);
        }

        /**
         * 绘制五角星
         * @param sx
         * @param sy
         * @param radius
         * @param color
         * @param rotato
         */
        function draw5Start() {
            context.save();
            context.fillStyle=FXQ.baseConf.color;
            //移动坐标原点  中心点开始绘制
            context.translate(width,height);
            //旋转
            context.rotate(Math.PI);
            context.beginPath();
            var dig = Math.PI/5*4
            for (var i = 0; i < 5; i++) {
                var x = Math.sin(i*dig);
                var y = Math.cos(i*dig);
                context.lineTo(x*30,y*30);
            }
            context.closePath();
            context.stroke();
            context.fill();
            context.restore();
        }


        /**
         * 绘制公章标题
         */
        function drawTitle() {

            var title = '';
            if (sType != 0) {

                title = '合同专用章';
            }

            // 绘制印章名称
            context.font = 'bolder 20px '+FXQ.baseConf.font;
            context.textBaseline = 'middle';//设置文本的垂直对齐方式
            context.textAlign = 'center'; //设置文本的水平对对齐方式
            context.lineWidth=1;
            context.fillStyle = FXQ.baseConf.color;
            context.fillText(title,width,height+65);
        }

        /**
         * 绘制公司名称
         */
        function writeFont() {
            context.font = 'bolder 30px '+FXQ.baseConf.font;
            var count = company.length;// 字数
            var angle = -4*Math.PI/(3*(count - 1));// 字间角度
            var chars = company.split("");
            var trueChars = chars.reverse();
            var c;
            for (var i = 0; i < count; i++){
                c = trueChars[i];// 需要绘制的字符
                if(i==0)
                    context.rotate(5*Math.PI/6.1);
                else
                    context.rotate(angle);
                context.save();
                context.translate(95, 0);// 平移到此位置,此时字和x轴垂直，第一个参数是与圆外边的距离，越大距离越近
                context.rotate(Math.PI/2);// 旋转90度,让字平行于x轴
                context.fillText(c,0, 5);// 此点为字的中心点
                context.restore();
            }

        }

        /**
         * 绘制签章序列号
         * @param serNo
         */
        function writeSerNo(serNo) {
            context.translate(width, height);
            context.font = 'bolder 8px '+FXQ.baseConf.font;
            var count = serNo.length;// 字数
            var angle = -2 * Math.PI / (6 * (count - 1));// 字间角度
            var chars = serNo.split("");

            for (var i = 0; i < count; i++) {
                var c = chars[i];// 需要绘制的字符
                if (i == 0)
                    context.rotate(10 * Math.PI / 5.95);
                else
                    context.rotate(angle);
                context.save();
                context.translate(-95, 5);// 平移到此位置,此时字和x轴垂直，第一个参数是与圆外边的距离，越大距离越近
                context.rotate(Math.PI / 2);// 旋转90度,让字平行于x轴
                context.fillStyle = FXQ.baseConf.color;
                context.fillText(c, 0, 5);// 此点为字的中心点
                context.restore();
            }
        }
    },
    /**
     * 绘制个人签章
     * @param name 姓名
     * @param cType 字体颜色
     * @param fType 字体
     * @param type 类型
     */
    personal: function (name,cType,fType,type,border) {
        this.commonMethod(cType,fType);
        var color = FXQ.baseConf.color;
        var font = FXQ.baseConf.font;
        //获取canvans doc对象
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        context.width = 112;
        context.height = 112;
        var length = name.length;
        //长方形前面
        if (type == 0) {
            console.log(context.width)
            //要边框
            if (border == 0) {
                context.rect(5, 5, 100, 50);
                context.strokeStyle = color;
                context.lineWidth = 4
                context.stroke();
            }
            // 绘制印章名称
            context.font = '30px '+font;
            if (length > 3)
            {
                context.font = '24px '+font;
            }
            context.textBaseline = 'middle';//设置文本的垂直对齐方式
            context.textAlign = 'center'; //设置文本的水平对对齐方式
            context.lineWidth=1;
            context.fillStyle = color;
            context.textAlign = 'center'; //设置文本的水平对对齐方式
            context.fillText(name,55,30);

        } else {//正方形
            var personal = '';
            switch (name.length) {
                case 3:
                    name += '印';
                    break;
                case 2:
                    name += '之印';
                default:
                    break;

            }
            var names = name.split('');
            personal = names[2]+names[0]+names[3]+names[1];
            //要边框
            if (border == 0) {
                context.rect(2,2,108,108);
                context.strokeStyle=color;
                context.lineWidth=2
                context.stroke();
            }

            // 绘制印章名称
            context.font = '40px '+font;
            context.fillStyle = color;
            this.wrapText(context,personal,8,45,80,40)

        }
        //返回图片base64
        return canvas.toDataURL();
    },
    /**
     * 字体换行
     * */
    wrapText: function (ctx,text, x, y, maxWidth, lineHeight) {
        if (typeof text != 'string' || typeof x != 'number' || typeof y != 'number') {
            return;
        }

        var context = ctx;
        var canvas = context.canvas;

        if (typeof maxWidth == 'undefined') {
            maxWidth = (canvas && canvas.width) || 112;
        }
        if (typeof lineHeight == 'undefined') {
            lineHeight = (canvas && parseInt(window.getComputedStyle(canvas).lineHeight)) || parseInt(window.getComputedStyle(document.body).lineHeight);
        }

        // 字符分隔为数组
        var arrText = text.split('');
        var line = '';

        for (var n = 0; n < arrText.length; n++) {
            var testLine = line + arrText[n];
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                context.fillText(arrText[0], x, y);
                context.fillText(arrText[1], x+50, y);
                line = arrText[n];
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        context.fillText(arrText[2], x, y+10);
        context.fillText(arrText[3], x+50, y+10);
    }
};










