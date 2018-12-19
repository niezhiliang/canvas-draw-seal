## **JavaScript 通过canvans来绘制签章，并返回生成图片的base64**

## Java画签章项目:https://github.com/niezhiliang/signature-utils

### **companyc1.png**

    FXQ.companySeal('某某某网络集团有限公司',0,0,1,'1234xyz')

![](https://github.com/niezhiliang/canvas-draw-seal/blob/master/imgs/companyc1.png)

### **companyc.png**

    FXQ.companySeal('某某某网络集团有限公司',0,0,0,'1234xyz')

![](https://github.com/niezhiliang/canvas-draw-seal/blob/master/imgs/companyc2.png)

### **companye1.png**

    FXQ.companyEllipse('某某某网络集团有限公司','1234567899876',0,0)

![](https://github.com/niezhiliang/canvas-draw-seal/blob/master/imgs/companye1.png)

### **personal1.png个人长方形带边框**

    FXQ.personal("李易峰",0,0,0,0);

![](https://github.com/niezhiliang/canvas-draw-seal/blob/master/imgs/personal1.png)

### **personal1.png个人长方形不带边框**

    FXQ.personal("赵丽颖",0,0,0,1);

![](https://github.com/niezhiliang/canvas-draw-seal/blob/master/imgs/personal2.png)

### **personal1.png 四个字个人正方形带边框该签章只支持2-4个字的名字**

    FXQ.personal("易烊千玺",1,1,1,0);

![](https://github.com/niezhiliang/canvas-draw-seal/blob/master/imgs/personal3.png)

### **personal1.png 两个字名字个人正方形带边框该签章只支持2-4个字的名字**

    FXQ.personal("王源",0,1,1,0);

![](https://github.com/niezhiliang/canvas-draw-seal/blob/master/imgs/personal4.png)

### **personal1.png 三个字名字个人正方形带边框该签章只支持2-4个字的名字**

    FXQ.personal("李易峰",0,1,1,0);

![](https://github.com/niezhiliang/canvas-draw-seal/blob/master/imgs/personal5.png)

### **personal1.png 四个字个人正方形不带边框该签章只支持2-4个字的名字**

    FXQ.personal("王俊凯",0,1,1,1);
![](https://github.com/niezhiliang/canvas-draw-seal/blob/master/imgs/personal6.png)
