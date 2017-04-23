Title: 期中協同查驗與自評
Date: 2017-04-23 11:00
Category: Course
Tags: 
Slug: midterm
Author: 40423103

期中協同查驗與自評

<!-- PELICAN_END_SUMMARY -->

##(一)Fossil Server 實習查驗

###<a href="https://mde2a2.kmol.info/midterm/ag2/wcontent">https://mde2a2.kmol.info/midterm/ag2/wcontent</a>

##(二)四連桿機構協同 Trace Point 查驗

 
<!-- 導入 Brython 標準程式庫 -->
 
<script type="text/javascript" src="https://cdn.rawgit.com/brython-dev/brython/master/www/src/brython_dist.js">
</script>
 
<!-- 啟動 Brython -->
 
<script>
window.onload=function(){
brython(1);
}
</script>
 
40423101 : L=50
 <!-- 以下實際利用  Brython 畫四連桿 trace point 路徑-->
 <canvas id="40423101" width="600" height="400"></canvas>
  
<script type="text/python3">
from browser import document as doc
from browser import html
import math
# 準備繪圖畫布
canvas = doc["40423101"]
ctx = canvas.getContext("2d")
 
fourbar_data = open("./../40423101/data/midterm1.csv").read()
fourbar_list = fourbar_data.splitlines()
# 以下可以利用 ctx 物件進行畫圖
# 先畫一條直線
ctx.beginPath()
# 設定線的寬度為 1 個單位
ctx.lineWidth = 1
# 利用 transform 將 y 座標反轉, 且 offset canvas.height
# (X scale, X skew, Y skew, Y scale, X offset, Y offset)
# 配合圖形位置進行座標轉換
ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100)
# 畫出 x 與 y 座標線
# 各座標值放大 3 倍
ratio = 3
ctx.moveTo(0, 0)
ctx.lineTo(-30*ratio, 0)
start_point = fourbar_list[0].split(",")
ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio)
count = 0
for data in fourbar_list[1:]:
    point = data.split(",")
    #count = count + 1
    #container1 <= str(count) + ":" + point[0] + "," + point[1]
    #container1 <= html.BR()
    ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio)
# 設定顏色為藍色, 也可以使用 "rgb(0, 0, 255)" 字串設定顏色值
ctx.strokeStyle = "blue"
# 實際執行畫線
ctx.stroke()
ctx.closePath()
</script>

40423103 : L=45
 <!-- 以下實際利用  Brython 畫四連桿 trace point 路徑-->
 <canvas id="40423103" width="600" height="400"></canvas>
  
<script type="text/python3">
from browser import document as doc
from browser import html
import math
# 準備繪圖畫布
canvas = doc["40423103"]
ctx = canvas.getContext("2d")
 
fourbar_data = open("./../40423103/data/midterm2.csv").read()
fourbar_list = fourbar_data.splitlines()
# 以下可以利用 ctx 物件進行畫圖
# 先畫一條直線
ctx.beginPath()
# 設定線的寬度為 1 個單位
ctx.lineWidth = 1
# 利用 transform 將 y 座標反轉, 且 offset canvas.height
# (X scale, X skew, Y skew, Y scale, X offset, Y offset)
# 配合圖形位置進行座標轉換
ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100)
# 畫出 x 與 y 座標線
# 各座標值放大 3 倍
ratio = 3
ctx.moveTo(0, 0)
ctx.lineTo(-30*ratio, 0)
start_point = fourbar_list[0].split(",")
ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio)
count = 0
for data in fourbar_list[1:]:
    point = data.split(",")
    #count = count + 1
    #container1 <= str(count) + ":" + point[0] + "," + point[1]
    #container1 <= html.BR()
    ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio)
# 設定顏色為藍色, 也可以使用 "rgb(0, 0, 255)" 字串設定顏色值
ctx.strokeStyle = "blue"
# 實際執行畫線
ctx.stroke()
ctx.closePath()
</script>

40423104 : L=40
 <!-- 以下實際利用  Brython 畫四連桿 trace point 路徑-->
 <canvas id="40423104" width="600" height="400"></canvas>
  
<script type="text/python3">
from browser import document as doc
from browser import html
import math
# 準備繪圖畫布
canvas = doc["40423104"]
ctx = canvas.getContext("2d")
 
fourbar_data = open("./../40423104/data/midterm3.csv").read()
fourbar_list = fourbar_data.splitlines()
# 以下可以利用 ctx 物件進行畫圖
# 先畫一條直線
ctx.beginPath()
# 設定線的寬度為 1 個單位
ctx.lineWidth = 1
# 利用 transform 將 y 座標反轉, 且 offset canvas.height
# (X scale, X skew, Y skew, Y scale, X offset, Y offset)
# 配合圖形位置進行座標轉換
ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100)
# 畫出 x 與 y 座標線
# 各座標值放大 3 倍
ratio = 3
ctx.moveTo(0, 0)
ctx.lineTo(-30*ratio, 0)
start_point = fourbar_list[0].split(",")
ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio)
count = 0
for data in fourbar_list[1:]:
    point = data.split(",")
    #count = count + 1
    #container1 <= str(count) + ":" + point[0] + "," + point[1]
    #container1 <= html.BR()
    ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio)
# 設定顏色為藍色, 也可以使用 "rgb(0, 0, 255)" 字串設定顏色值
ctx.strokeStyle = "blue"
# 實際執行畫線
ctx.stroke()
ctx.closePath()
</script>

40423117 : L=35
 <!-- 以下實際利用  Brython 畫四連桿 trace point 路徑-->
 <canvas id="40423117" width="600" height="400"></canvas>
  
<script type="text/python3">
from browser import document as doc
from browser import html
import math
# 準備繪圖畫布
canvas = doc["40423117"]
ctx = canvas.getContext("2d")
 
fourbar_data = open("./../40423117/data/midterm4.csv").read()
fourbar_list = fourbar_data.splitlines()
# 以下可以利用 ctx 物件進行畫圖
# 先畫一條直線
ctx.beginPath()
# 設定線的寬度為 1 個單位
ctx.lineWidth = 1
# 利用 transform 將 y 座標反轉, 且 offset canvas.height
# (X scale, X skew, Y skew, Y scale, X offset, Y offset)
# 配合圖形位置進行座標轉換
ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100)
# 畫出 x 與 y 座標線
# 各座標值放大 3 倍
ratio = 3
ctx.moveTo(0, 0)
ctx.lineTo(-30*ratio, 0)
start_point = fourbar_list[0].split(",")
ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio)
count = 0
for data in fourbar_list[1:]:
    point = data.split(",")
    #count = count + 1
    #container1 <= str(count) + ":" + point[0] + "," + point[1]
    #container1 <= html.BR()
    ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio)
# 設定顏色為藍色, 也可以使用 "rgb(0, 0, 255)" 字串設定顏色值
ctx.strokeStyle = "blue"
# 實際執行畫線
ctx.stroke()
ctx.closePath()
</script>

40423136 : L=30
<!-- 以下實際利用  Brython 畫四連桿 trace point 路徑-->
 <canvas id="fourbar_40423229" width="600" height="400"></canvas>
  
<script type="text/python3">
from browser import document as doc
from browser import html
import math
# 準備繪圖畫布
canvas = doc["40423136"]
ctx = canvas.getContext("2d")
 
fourbar_data = open("./../40423136/data/midterm5.csv").read()
fourbar_list = fourbar_data.splitlines()
# 以下可以利用 ctx 物件進行畫圖
# 先畫一條直線
ctx.beginPath()
# 設定線的寬度為 1 個單位
ctx.lineWidth = 1
# 利用 transform 將 y 座標反轉, 且 offset canvas.height
# (X scale, X skew, Y skew, Y scale, X offset, Y offset)
# 配合圖形位置進行座標轉換
ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100)
# 畫出 x 與 y 座標線
# 各座標值放大 3 倍
ratio = 3
ctx.moveTo(0, 0)
ctx.lineTo(-30*ratio, 0)
start_point = fourbar_list[0].split(",")
ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio)
count = 0
for data in fourbar_list[1:]:
    point = data.split(",")
    #count = count + 1
    #container1 <= str(count) + ":" + point[0] + "," + point[1]
    #container1 <= html.BR()
    ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio)
# 設定顏色為藍色, 也可以使用 "rgb(0, 0, 255)" 字串設定顏色值
ctx.strokeStyle = "blue"
# 實際執行畫線
ctx.stroke()
ctx.closePath()
</script>

40423149 : L=25
<!-- 以下實際利用  Brython 畫四連桿 trace point 路徑-->
 <canvas id="40423149" width="600" height="400"></canvas>
  
<script type="text/python3">
from browser import document as doc
from browser import html
import math
# 準備繪圖畫布
canvas = doc["40423149"]
ctx = canvas.getContext("2d")
 
fourbar_data = open("./../40423149/data/midterm6.csv").read()
fourbar_list = fourbar_data.splitlines()
# 以下可以利用 ctx 物件進行畫圖
# 先畫一條直線
ctx.beginPath()
# 設定線的寬度為 1 個單位
ctx.lineWidth = 1
# 利用 transform 將 y 座標反轉, 且 offset canvas.height
# (X scale, X skew, Y skew, Y scale, X offset, Y offset)
# 配合圖形位置進行座標轉換
ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100)
# 畫出 x 與 y 座標線
# 各座標值放大 3 倍
ratio = 3
ctx.moveTo(0, 0)
ctx.lineTo(-30*ratio, 0)
start_point = fourbar_list[0].split(",")
ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio)
count = 0
for data in fourbar_list[1:]:
    point = data.split(",")
    #count = count + 1
    #container1 <= str(count) + ":" + point[0] + "," + point[1]
    #container1 <= html.BR()
    ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio)
# 設定顏色為藍色, 也可以使用 "rgb(0, 0, 255)" 字串設定顏色值
ctx.strokeStyle = "blue"
# 實際執行畫線
ctx.stroke()
ctx.closePath()
</script>

40423157 : L=20
 <!-- 以下實際利用  Brython 畫四連桿 trace point 路徑-->
 <canvas id="40423157" width="600" height="400"></canvas>
 
<script type="text/python3">
from browser import document as doc
from browser import html
import math
# 準備繪圖畫布
canvas = doc["40423157"]
ctx = canvas.getContext("2d")
 
fourbar_data = open("./../40423157/data/midterm7.csv").read()
fourbar_list = fourbar_data.splitlines()
# 以下可以利用 ctx 物件進行畫圖
# 先畫一條直線
ctx.beginPath()
# 設定線的寬度為 1 個單位
ctx.lineWidth = 1
# 利用 transform 將 y 座標反轉, 且 offset canvas.height
# (X scale, X skew, Y skew, Y scale, X offset, Y offset)
# 配合圖形位置進行座標轉換
ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100)
# 畫出 x 與 y 座標線
# 各座標值放大 3 倍
ratio = 3
ctx.moveTo(0, 0)
ctx.lineTo(-30*ratio, 0)
start_point = fourbar_list[0].split(",")
ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio)
count = 0
for data in fourbar_list[1:]:
    point = data.split(",")
    #count = count + 1
    #container1 <= str(count) + ":" + point[0] + "," + point[1]
    #container1 <= html.BR()
    ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio)
# 設定顏色為藍色, 也可以使用 "rgb(0, 0, 255)" 字串設定顏色值
ctx.strokeStyle = "blue"
# 實際執行畫線
ctx.stroke()
ctx.closePath()
</script>

##(三)Fourbar Walker OnShape 零件協同繪圖與組立查驗

##(四) 分組協同零件展示
