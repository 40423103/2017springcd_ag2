var tipuesearch = {"pages":[{"url":"./pages/about/","tags":"misc","title":"About","text":"2017Spring 機械設計工程系協同產品設計實習 第二組 倉儲: https://github.com/40423103/2017springcd_ag2 投影片: http://40423103.github.io/2017springcd_ag2 網誌: http://40423103.github.io/2017springcd_ag2/blog Fossil: https://mde2a2.kmol.info/cdag2/home"},{"url":"./midterm.html","tags":"Course","title":"期中協同查驗與自評","text":"期中協同查驗與自評 (一)Fossil Server 實習查驗 https://mde2a2.kmol.info/midterm/ag2/wcontent (二)四連桿機構協同 Trace Point 查驗 40423157 : L=20 window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"40423157\"] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../40423157/data/midterm7.csv\").read() fourbar_list = fourbar_data.splitlines() # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 3 倍 ratio = 3 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() (三)Fourbar Walker OnShape 零件協同繪圖與組立查驗 (四) 分組協同零件展示"},{"url":"./midtermhw.html","tags":"Course","title":"期中作業分配","text":"期中作業分配 作業網址： http://mde.tw/2017springcd/blog/midterm-collaboration-evaluation.html 作業在 4/22(六) pm11:59 前完成。 (二) 四連桿機構協同 Trace Point 查驗 檔案統一放在各自倉儲的 data 資料夾下 40423101：L = 50， 檔名：midterm1 40423103：L = 45， 檔名：midterm2 40423104：L = 40， 檔名：midterm3 40423117：L = 35， 檔名：midterm4 40423136：L = 30， 檔名：midterm5 40423149：L = 25， 檔名：midterm6 40423157：L = 20， 檔名：midterm7 (三) Fourbar Walker OnShape 零件協同繪圖與組立查驗 繪製零件的組員，檔案請共享給 40423101@gm.nfu.edu.tw 桿鍵寬度：5 厚度：2 銷孔直徑：3 單位統一為\"mm\" 40423101：組裝 (要影片) 40423103：身體 40423104：V-rep (要影片) 40423117：L = 75 40423136：L = 60 40423149：L = 10 40423157：銷 (長：5 )"},{"url":"./V-rep.html","tags":"Course","title":"第四週","text":"單連桿機構 利用Solvespace繪製單連桿機構，並導入V-rep進行動態模擬 1. 長度 30 桿鍵 2. 長度 50桿鍵 3. 直徑 5 桿鍵 4. 導入 V-rep"},{"url":"./hyperworks.html","tags":"Course","title":"第三週","text":"Hyperworks Hyperworks1 逐字稿 In the 2017 release, we followed our vision and implement a lot more features, delivering more technology for your HyperWorks units investment. 在2017年版本中，我們遵循了我們的願景並實施了更多功能，為您的HyperWorks單位投資提供更多技術。 In our continuous development, we focused, as# always, on simulation-driven innovation, adding more optimization technology. 在我們的不斷發展中，我們一如既往地專注於模擬驅動的創新，增加更多的優化技術。 We added more physics simulation to the software, and we improved our parallel performance on high performance computers. 我們增加了許多的物理的模擬，我們提高了高性能電腦的平行性能。 OptiStruct, which is our implicit code, adds a lot of development in the nonlinear implicit area, but also in the optimization technology. OptiStruct是我們的隱式代碼，在非線性隱含區域中，也在優化技術中添加了很多開發。 RADIOSS, we see a lot of development in new materials and material modeling. RADIOSS，我們看到很多新材料和材料建模的發展。 You probably know that we did the acquisition of MDS a couple of years back, and we have now MDS integrated with RSDIOSS, and are doing application there. 您可能知道我們在幾年前就完成了MDS的收購，現在我們已經將MDS與RSDIOSS整合，並開始應用。 MotionSolve is based on a very unique formulation that this different from other multibody dynamics code, and the formulation lends itself very well to optimization implementation. MoMotionSolvetionSolve是根據一個非常獨特的公式，這不同於其他多體動力學代碼，MotionSolve公式本身非常好地優化實施。 So the team has worked really hard on contact formulations, got very robust. 因此團隊對於接觸公式非常努力，獲得了非常強大的。 It's very cool which kind of problems can solve with contact modelling. 這類型的問題可以解決與接觸建模這是非常酷的。 So this is along the structural solvers side on AcuSolve side we actually added the complete portfolio of turbulence and transition models that really helps us to solve problems in wind turbines and automotive industry much more accurately, and it's a big asset of physics simulation. 因此，這是沿著AcuSolve一側的結構解算方面，我們實際添加了完整的湍流和轉換模型組合，真正幫助我們更準確地解決風力渦輪機和汽車行業的問題，這是物理仿真的一個重要的資產。 And then our electromagnetic suite has actually grown last year through the acquisition of Flux, from the CEDRAT company. 然後，我們的電磁套件實際上是去年通過從CEDRAT公司收購Flux而實現的。 As well as the acquisition of WinProp, from AWE. 以及從AWE收購WinProp。 So now we have a complete frequency spectrum from low frequency electromagnetics the high frequency electromagnetics which is powered by FEKO. 所以現在我們有一個完整的頻譜從低頻電磁學的高頻電磁學由FEKO供電。 We now have a complete portfolio of physics modeling available for our customers, and it's all linked through optimization. 我們現在有一個完整的物理建模組合可用於我們的客戶，它都通過優化鏈接。 Hyperworks3 逐字稿 In OptiStruct, one of our focus areas is nonlinear large deformation analysis. 在OptiStruct中，我們的一個重點領域是非線性大變形分析。 And in 2017 we added nonlinear transient analysis. 在2017年，我們添加了非線性瞬態分析 The main purpose was to couple AcuSolve to do fluid-structure interaction. 主要目的是使AcuSolve與流體 - 結構相互作用。 But also one development that happened during the last year came out piece-wise in different point releases and is now really mature. 但是，在過去一年中發生的一個發展，在不同的積分發布中分段出現，現在已經成熟。 And 2017 is our contact analysis, so we have different ways of defining sliding contact and things like that. 2017年是我們的接觸分析，所以我們有不同的方式來定義滑動接觸和類似的東西。 The fast contact analysis for small deformation is blazing fast. 對小變形的快速接觸分析是快速的。 It's a very simple idea that makes the solution very fast, and that adds OptiStruct as really a leading nonlinear structural solver. 這是一個非常簡單的想法，使解決方案非常快，並將OptiStruct添加為真正的領先的非線性結構求解器。 Our two major optimization packages are OptiStruct for structural optimization, there's a huge multidisciplinary component, too. 我們的兩個主要優化包是用於結構優化的OptiStruct，還有一個巨大的多學科組件。 And Hyperstudy for general optimization wrap around multidisciplinary optimization. 並且Hyperstudy對一般優化包圍多學科優化。 OptiStruct we spend a lot of time continuing the development for optimization and we have now Failsafe topology optimization. OptiStruct我們花了很多時間繼續開發優化，我們現在已經失效的拓撲優化。 We kept on working on the manufacturing solution to do lattice optimization. 我們一直在製造解決方案上做晶格優化。 For the multi-model optimization it's really maturing and we find more and more applications where that helps. 對於多模型優化，它真的成熟，我們發現越來越多的應用程序，這有助於。 Our goal is actually to include all the physics in the optimizations. 我們的目標實際上是在優化中包括所有的物理。 So the team right now is working on optimization for nonlinear problems and so on. 所以團隊現在正在努力優化非線性問題等等。 And then Hyperstudy, on the other hand, is going through a new transformation of the user the user experience was changed a few years back, but we are now trying to make it much more easy to use by hiding a lot of the advanced functionalities to the regular users. 另一方面，Hyperstudy正在經歷用戶體驗在幾年前改變的用戶體驗的一個新的轉變，但是我們現在試圖通過隱藏許多高級功能來使它更容易使用 普通用戶。 And depending on the level of expertise or depending on the job that the user has to do, they can customize the user experience. 並且取決於專業水平或者根據用戶必須做的工作，他們可以定制用戶體驗。 We adds a few new connections. 我們添加了一些新的連接。 One of them is a Flux connection. 其中一個是Flux連接。 Flux is an electromagnetics code that we just acquired for low frequency electromagnetics, so we can all take a Flux database and put it into Hyperstudy into the study with that. Flux是我們剛剛為低頻電磁學採集的電磁學代碼，所以我們可以採用一個Flux數據庫，並把它放入Hyperstudy進行研究。"},{"url":"./4bar.html","tags":"Course","title":"第二週","text":"四連桿機構 1. 30桿鍵 2. 50桿鍵 3. 60桿鍵 4. 組裝 繪製影片 四連桿 from 劉怡萱 on Vimeo ."},{"url":"./2017springcd_ag2-member.html","tags":"Course","title":"第一週","text":"組員名單 40423101 曾宜萱 倉儲 投影片 部落格 40423103 劉怡萱 倉儲 投影片 部落格 40423104 顏暄 倉儲 投影片 部落格 40423117 李國豪 倉儲 投影片 部落格 40423136 陳柏維 倉儲 投影片 部落格 40423149 蔡悌仁 倉儲 投影片 部落格 40423157 朱明棈 倉儲 投影片 部落格"}]};