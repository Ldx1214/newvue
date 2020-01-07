<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2> -->
    <div>IntelligentEntertainment</div>
    <ul>
      <li>
        <router-link  to="/">Solutions</router-link>
        <b class="img"></b>
        <div class="menu_li_c">
          <p><router-link  to="/IntelligentSecurity">Intelligent Security</router-link></p>
          <p><router-link  to="/SmartHome">Smart Home</router-link></p>
          <p><router-link  to="/IntelligentCustomer">Intelligent Customer</router-link></p>
          <p><router-link  to="/IntelligentDriving">Intelligent Driving</router-link></p>
          <p><router-link  to="/IntelligentEntertainment">Intelligent Entertainment</router-link></p>
          <p><router-link  to="/IntelligentTranslation">Intelligent Translation</router-link></p>
        </div>
      </li>
      <li>
        <router-link  to="/">Dataset Product</router-link>
        <div class="menu_li_c">
          <p><a href="/Image">Image</a></p>
          <p><router-link  to="/en/products?dataclass1=165">Speech</router-link></p>
          <p><router-link  to="/en/products?dataclass1=183">Text</router-link></p>
        </div>
      </li>
      <li>
        <router-link  to="/">Customization</router-link>
        <!-- <div class="menu_li_c">
          <p><router-link  to="/en/dataCollection">Data Collection</router-link></p>
          <p><router-link  to="/en/dataTanging">Data Annotation</router-link></p>
        </div> -->
      </li>
      <li>
        <router-link  to="/en/opensourc">Open Source</router-link>
      </li>

      <li>
        <router-link  to="/en/whyChangeUs">Why Us</router-link>
      </li>
    </ul>
    <div class="home_banner">
      <ul class=" home_banner_list">
        <li style='display:flex;'>
          <!-- <img src="/shujutang/static/image/index/banner2.png" alt=""> -->
          <p>
            As a professional AI data service provider, Datatang is dedicated to providing data collection and data product services for global AI enterprises through three service modes: massive AI data sets with its own copyrighted (massive shared copyright AI
            datasets), AI data customization service and data annotation platform.
          </p>
        </li>

      </ul>
      <!-- <ol class='clear bannerDot'>
          <li class='active'></li>

      </ol> -->
    </div>
    <!-------------------------- 数据产品推荐 -------------------------->
    <div class="home_product">
      <div class="home_product_list">
        <div class="home_product_tit">
          <a href="/en/intelligentData?dataSolution=4">
            <div class="home_product_tit_bg">
              <h2>Intelligent Entertainment</h2>
              <p title="In 2017, the global smartphone sales had reached 1.4 billion units. By 2018, the number of mobile phone applications had exceeded 4.14 million. In the most popular APP, data plays a powerful role in supporting powerful functions such as one-touch beauty, live interaction, short video special effects, identity authentication, face unlocking, etc.">In 2017, the global smartphone sales had reached 1.4 billion units. By 2018, the number of mobile phone applications had exceeded 4.14 million. In the most popular APP, data plays a powerful role in supporting powerful functions
                such as one-touch beauty, live interaction, short video special effects, identity authentication, face unlocking, etc.</p>
              <span href="javascript:;">Learn more</span>
            </div>
          </a>
        </div>
        <ul class="home_paoduct_content">
          <li>
            <dl>
              <dt><img src="/shujutang/static/image/index/list_bg1.png" alt="" class="detailInfo" dataId="957" type="147"></dt>
              <dd class="home_paoduct_h"><a href="javascript:;" class="detailInfo" dataId="957" type="147" title="18 Gestures Recognition Data">18 Gestures Recognition Data</a><span></span></dd>
              <dd class="home_paoduct_ul">
                <ul>
                  <li>314,178 Images</li>
                  <li>Entertainment, Digital Gestures</li>
                  <li title="Annotating 21 Key Points and Gesture Attributes">Annotating 21 Key Points and Gesture Attributes</li>
                </ul>
              </dd>
              </a>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="/shujutang/static/image/index/datatang_tuxiang_default.png" alt="" class="detailInfo" dataId="1020" type="147"></dt>
              <dd class="home_paoduct_h"><a href="javascript:;" class="detailInfo" dataId="1020" type="147" title="face data set of identification photos and life photos">Face Data Set Of Identification Photos And Life Photos</a><span></span></dd>
              <dd class="home_paoduct_ul">
                <ul>
                  <li>20,000 people</li>
                  <li title="yellow people, white people, black people">yellow people, white people, black people</li>
                  <li title="For each person, we collected one id photo and 5-10 life photos.">For each person, we collected one id photo and 5-10 life photos.</li>
                </ul>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="/shujutang/static/image/index/datatang_tuxiang_default.png" alt="" class="detailInfo" dataId="1016" type="147"></dt>
              <dd class="home_paoduct_h"><a href="javascript:;" class="detailInfo" dataId="1016" type="147" title="human faces data of black race with multiple facial postures">Human Faces Data Of Black Race With Multiple Facial Postures</a><span></span></dd>
              <dd class="home_paoduct_ul">
                <ul>
                  <li>10,000 people</li>
                  <li title="The ratio of male to female is about 1:1">The ratio of male to female is about 1:1</li>
                  <li title="Twenty-nine images for each person">Twenty-nine images for each person</li>
                </ul>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
      <div class="home_product_list">
        <div class="home_product_tit">
          <a href="/en/intelligentData?dataSolution=1">
            <div class="home_product_tit_bg znjj_bg">
              <h2>Smart Home</h2>
              <p title="In an era when the Internet of Things is developing vigorously, smart home products have entered an explosive period. The global smart home market will reach US$ 122 billion in 2,022, with an average annual growth rate of 14%. At present, the more popular products in the smart home industry mainly include smart speakers, smart home appliances, children's story machine, companion robots, etc.">In an era when the Internet of Things is developing vigorously, smart home products have entered an explosive period. The global smart home market will reach US$ 122 billion in 2,022, with an average annual growth rate of 14%.
                At present, the more popular products in the smart home industry mainly include smart speakers, smart home appliances, children's story machine, companion robots, etc.</p>
              <span>Learn more</span>
            </div>
          </a>
        </div>
        <ul class="home_paoduct_content">
          <li>
            <dl>
              <dt><img src="/shujutang/static/image/index/list_bg2.png" alt="" class="detailInfo" dataId="1014" type="165"></dt>
              <dd class="home_paoduct_h"><a href="javascript:;" class="detailInfo" dataId="1014" type="165" title="Mixed Speech with Chinese &English by Mobile Phone">Mixed Speech With Chinese &English By Mobile Phone</a><span></span>
              </dd>
              <dd class="home_paoduct_ul">
                <ul>
                  <li>500 Hours</li>
                  <li>1,000 speakers</li>
                  <li title="General and Interactive Oral Sentences">General and Interactive Oral Sentences</li>
                </ul>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="/shujutang/static/image/index/list_bg3.png" alt="" class="detailInfo" dataId="1003" type="165"></dt>
              <dd class="home_paoduct_h"><a href="javascript:;" class="detailInfo" dataId="1003" type="165" title="Heavy-accent Mandarin Speech Data by Mobile Phone">Heavy-accent Mandarin Speech Data By Mobile Phone</a><span></span></dd>
              <dd class="home_paoduct_ul">
                <ul>
                  <li>1,000 Hours</li>
                  <li title="The ratio of men to women is 1:1">The ratio of men to women is 1:1</li>
                  <li title="South China dominates">South China dominates</li>
                </ul>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="/shujutang/static/image/index/list_bg4.png" alt="" class="detailInfo" dataId="937" type="165"></dt>
              <dd class="home_paoduct_h">
                <a href="javascript:;" class="detailInfo" dataId="937" type="165" title="Chinese Children Speech data by Mobile phone">Chinese Children Speech Data By Mobile Phone</a><span></span></dd>
              <dd class="home_paoduct_ul">
                <ul>
                  <li>3,000 Hours</li>
                  <li title="14000 people children aged 6-12">14,000 people children aged 6-12</li>
                  <li title="This data covers the seven dialect districts in China.">This data covers the seven dialect districts in China.</li>
                </ul>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
      <div class="home_product_list">
        <div class="home_product_tit">
          <a href="/en/intelligentData?dataSolution=0">
            <div class="home_product_tit_bg znaf_bg">
              <h2>Intelligent Security</h2>
              <p title="Based on different service objects, intelligent security can be divided into three categories: human body, vehicle and scene. Intelligent security data solutions are widely used in intrusion alarm systems, video security monitoring
                    systems, entrance and exit control systems, BSV LCD splicing wall systems, entrance and exit fire protection systems, etc.">Based on different service objects, intelligent security can be divided into three categories: human body, vehicle and scene. Intelligent security data solutions are widely used in intrusion alarm systems, video security monitoring
                systems, entrance and exit control systems, BSV LCD splicing wall systems, entrance and exit fire protection systems, etc.</p>
              <span>Learn more</span>
            </div>
          </a>
        </div>
        <ul class="home_paoduct_content">
          <li>
            <dl>
              <dt><img src="/shujutang/static/image/index/list_bg5.png" alt="" class="detailInfo" dataId="986" type="147"></dt>
              <dd class="home_paoduct_h"><a href="javascript:;" class="detailInfo" dataId="986" type="147" title="Human Body Detection in Surveillance Video Data">Human Body Detection In Surveillance Video Data</a><span></span></dd>
              <dd class="home_paoduct_ul">
                <ul>
                  <li title="223557 Bounding Boxes">223,557 Bounding Boxes</li>
                  <li>real monitoring</li>
                  <li title="Human body detection frame and status attributes">Human body detection frame and status attributes</li>
                </ul>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="/shujutang/static/image/index/list_bg6.png" alt="" class="detailInfo" dataId="978" type="147"></dt>
              <dd class="home_paoduct_h"><a href="javascript:;" class="detailInfo" dataId="978" type="147" title="Multi Scenario & Period Traffic Surveillance Video">Multi Scenario & Period Traffic Surveillance Video</a><span></span></dd>
              <dd class="home_paoduct_ul">
                <ul>
                  <li>About 59.6 hours</li>
                  <li>983 road videos</li>
                  <li title="Multiple outdoor scenes, Multiple periods of time">Multiple outdoor scenes, Multiple periods of time</li>
                </ul>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="/shujutang/static/image/index/list_bg7.png" alt="" class="detailInfo" dataId="965" type="147"></dt>
              <dd class="home_paoduct_h"><a href="javascript:;" class="detailInfo" dataId="965" type="147" title="Multi-view Tracking Data">Multi-view Tracking Data</a><span></span></dd>
              <dd class="home_paoduct_ul">
                <ul>
                  <li>10,134 People</li>
                  <li>Yellow people</li>
                  <li title="The accuracy is more than 97%">The accuracy is more than 97%</li>
                </ul>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
      <div class="home_product_list">
        <div class="home_product_tit">
          <a href="/en/intelligentData?dataSolution=3">
            <div class="home_product_tit_bg znjs_bg">
              <h2>Intelligent Driving</h2>
              <p title="According to McKinsey statistics, the IntelliDrive market will exceed US$ 500 billion by 2,030. In the intelligent driving industry, according to different application scenarios, the most popular fields are mainly focused on driving
                    and parking.">According to McKinsey statistics, the IntelliDrive market will exceed US$ 500 billion by 2,030. In the intelligent driving industry, according to different application scenarios, the most popular fields are mainly focused on driving
                and parking.</p>
              <span>Learn more</span>
            </div>
          </a>
        </div>
        <ul class="home_paoduct_content">
          <li>
            <dl>
              <dt><img src="/shujutang/static/image/index/list_bg8.png" alt="" class="detailInfo" dataId="963" type="147"></dt>
              <dd class="home_paoduct_h"><a href="javascript:;" class="detailInfo" dataId="963" type="147" title="Driver Behavior Data">Driver Behavior Data</a><span></span></dd>
              <dd class="home_paoduct_ul">
                <ul>
                  <li>1,000 People</li>
                  <li title="Equal proportion of men and women">Equal proportion of men and women</li>
                  <li title="Dangerous driving、Fatigue driving、deviation of the visual line">Dangerous driving、Fatigue driving、deviation of the visual line</li>
                </ul>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="/shujutang/static/image/index/list_bg9.png" alt="" class="detailInfo" dataId="258" type="147"></dt>
              <dd class="home_paoduct_h"><a href="javascript:;" class="detailInfo" dataId="258" type="147" title="Streetview Images with Bounding Box Annotation">Streetview Images With Bounding Box Annotation</a><span></span></dd>
              <dd class="home_paoduct_ul">
                <ul>
                  <li>9,717 Images</li>
                  <li title="Collected from urban and rural roads in China">Collected from urban and rural roads in China</li>
                  <li title="Annotating Pedestrians, Vehicles, Signals, Indicators and Prohibitory Signs">Annotating Pedestrians, Vehicles, Signals, Indicators and Prohibitory Signs</li>
                </ul>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt><img src="/shujutang/static/image/index/list_bg10.png" alt="" class="detailInfo" dataId="253" type="147"></dt>
              <dd class="home_paoduct_h"><a href="javascript:;" class="detailInfo" dataId="253" type="147" title="Various Classes of Street View Image With Detail Annotation">Various Classes Of Street View Image With Detail Annotation</a><span></span></dd>
              <dd class="home_paoduct_ul">
                <ul>
                  <li>9,876 Images</li>
                  <li>28 categories</li>
                  <li>The accuracy rate is 95%</li>
                </ul>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
    <!-------------------------- 数据定制服务 -------------------------->
    <div class="home_customized">
      <h2 class="home_customized_tit">AI data customization</h2>
      <ul class="home_customized_list">
        <li>
          <p>150,000 crowdsourcers</p>
        </li>
        <li>
          <p>More than 1,000 partners</p>
        </li>
        <li>
          <p>3 super large data processing bases</p>
        </li>
        <li>
          <p>Support multi-national and multi-regional and multi-age complex collection tasks</p>
        </li>
        <li>
          <p>Support 3D point cloud, semantic segmentation, TTS and other specialized data annotation services</p>
        </li>
      </ul>
      <div class="home_customized_btn">
        <a href="/en/dataCollection" class="home_customized_caiji">Collection</a>
        <a href="/en/dataTanging" class="home_customized_biaozhu">Customized</a>
      </div>
    </div>
    <!--------------------------- 数据标注平台 --------------------------->
    <div class="home_tagging">
      <ul class="home_tagging_left">
        <li>
          <h2>Data annotation platform</h2>
        </li>
        <li>
          <p>Privatized deployment of data annotation platform will fully ensure the data safety of the enterprise. The data annotation platform has hundreds of sets of data annotation tool sets, which are supported by a perfect service process system
            to meet the data security and personalized needs of different enterprises.</p>
        </li>
        <li>
          <a href="javascript:;" class="home_tagging_alert">Learn more</a>
        </li>
      </ul>
      <ul class="home_tagging_right">
        <!-- <li>部署在客户本地的私有数据工厂</li>
        <li>处理好的数据</li>
        <li>模型训练</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IntelligentEntertainment',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .img{
    display: inline-block;
    width: 12px;
    height: 12px;
    background: url(/../images/top_03.png) no-repeat center;
    background-size: contain;
    margin-left: 5px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: black;
  }
  .menu_li_c{
    position: absolute;
    left: 0px;
    top: 60px;
    padding: 10px 0;
    display: block;
  }
  a{
    text-decoration:none;
  }
  b{
    width: 32px;
    height: 4px;
    display: block;
    overflow: hidden;
    background-color: #f5a21b;
    position: absolute;
    left: 0px;
    bottom: 0px;
    display: none;
  }
  .img{
    background: url(/images/top_04.png) no-repeat center;
  }
</style>
