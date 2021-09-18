<template>
    <div>
    <div id="indoor3d" style="width: 100%; height: 100%; top:0px; left: 0px; position: absolute"></div>
    <!-- 模态框 -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header">
          <h4>摊位详情</h4>
          <span class="close">x</span>
        </div>
        <div class="modal-body">
          <ul id="myTab" class="nav nav-tabs">
            <li class="active">
              <a href="#basicInformation" data-toggle="tab">
                <button type="button" class="btn btn-default btn-sm">基础信息</button>
              </a>
            </li>
            <li>
              <a href="#settlementInformation" data-toggle="tab">
                <button type="button" class="btn btn-default btn-sm">结算信息</button>
              </a>
            </li>
            <li>
              <a href="#qualificationInformation" data-toggle="tab">
                <button type="button" class="btn btn-default btn-sm">资质信息</button>
              </a>
            </li>          
          </ul>
          <div id="myTabContent" class="tab-content">
            <div class="tab-pane fade in active" id="basicInformation">
              <div class="container" style="margin-top: 20px;">
                <div class="row">
                    <div class="col-md-4">
                      <span class="attr-label">上级机构：</span><span class="attr-value" id="fatherName"></span>
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">类型：</span><span class="attr-value" id="branchType">111</span>
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">编号：</span><span class="attr-value" id="branchCode"></span>
                    </div>
                </div><br>
                <div class="row">
                    <div class="col-md-4 col-md-push-12">
                      <span class="attr-label">名称：</span><span class="attr-value" id="branchName"></span>
                    </div>
                </div><br>
                <div class="row">
                    <div class="col-md-4">
                      <span class="attr-label">摊位分类：</span><span class="attr-value" id="kindTypeName"></span>
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">简称：</span><span class="attr-value" id="simName"></span>
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">助记码：</span><span class="attr-value" id="shortName"></span>
                    </div>
                </div><br> 
                <div class="row">
                    <div class="col-md-4">
                      <span class="attr-label">负责人：</span><span class="attr-value" id="managerUserName"></span>
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">联系电话：</span><span class="attr-value" id="telno"></span>
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">星级：</span><span class="attr-value" id="starCount"></span>
                    </div>
                </div><br>             
                <div class="row">
                    <div class="col-md-8">
                      <span class="attr-label">摊主头像：</span><img style="width:60px;height:60px;" id="managerImageUrl">
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">评分：</span><span class="attr-value" id="scoreCount"></span>
                    </div>
                </div><br>     
                <div class="row">
                    <div class="col-md-8">
                      <span class="attr-label">省市区：</span><span class="attr-value" id="basAreaPath"></span>
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">邮编：</span><span class="attr-value" id="zipcode"></span>
                    </div>
                </div><br>      
                <div class="row">
                    <div class="col-md-12">
                      <span class="attr-label">详细地址：</span><span class="attr-value" id="address"></span>
                    </div>
                </div><br>       
                <div class="row">
                    <div class="col-md-12">
                      <span class="attr-label">经营范围：</span><span class="attr-value" id="shopCategoryNames"></span>
                    </div>
                </div><br> 
                <div class="row">
                    <div class="col-md-8">
                      <span class="attr-label">结算商户：</span><span class="attr-value" id="settleBranchId"></span>
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">面积：</span><span class="attr-value" id="acreageCount"></span>
                    </div>
                </div><br>  
                <div class="row">
                    <div class="col-md-12">
                      <span class="attr-label">机构属性：</span><span class="attr-value" id="flagIds"></span>
                    </div>
                </div>                                                          
              </div>            
            </div>
            <div class="tab-pane fade" id="settlementInformation">
              <div class="container" style="margin-top: 20px;">
                <div class="row">
                    <div class="col-md-12">
                      <span class="attr-label">结算天数：</span><span class="attr-value" id="settleDays"></span>
                    </div>
                </div><br>
                <div class="row">
                    <div class="col-md-4 col-md-push-12">
                      <span class="attr-label">付款天数：</span><span class="attr-value" id="payDays"></span>
                    </div>
                </div><br>
                <div class="row">
                    <div class="col-md-12">
                      <span class="attr-label">滞纳天数：</span><span class="attr-value" id="pledgeDays"></span>
                    </div>
                </div><br> 
                <div class="row">
                    <div class="col-md-12">
                      <span class="attr-label">滞纳金比例：</span><span class="attr-value" id="pledgeRate"></span>
                    </div>
                </div>                                                                     
              </div> 
            </div>
            <div class="tab-pane fade" id="qualificationInformation">
              <div class="container" style="margin-top: 20px;">
                <div class="row">
                    <div class="col-md-8">
                      <span class="attr-label">营业执照复印件：</span><img style="width:60px;height:60px;" id="businessUrl">
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">营业执照号：</span><span class="attr-value" id="businessCode"></span>
                    </div>
                </div><br>
                <div class="row">
                    <div class="col-md-8">
                      <span class="attr-label">身份证复印件：</span><img style="width:60px;height:60px;" id="identityUrl">
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">身份证号：</span><span class="attr-value" id="identityCode"></span>
                    </div>                    
                </div><br>
                <div class="row">
                    <div class="col-md-4">
                      <span class="attr-label">市场简介：</span><span class="attr-value" id="branchDesc"></span>
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">市场规模：</span><span class="attr-value" id="branchScope"></span>
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">社会信用代码：</span><span class="attr-value" id="creditCode"></span>
                    </div>
                </div><br> 
                <div class="row">
                    <div class="col-md-4">
                      <span class="attr-label">食安负责人：</span><span class="attr-value" id="safeManager"></span>
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">食安电话：</span><span class="attr-value" id="safeMobile"></span>
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">检测师：</span><span class="attr-value" id="surveyorName"></span>
                    </div>
                </div><br>             
                <div class="row">
                    <div class="col-md-4">
                      <span class="attr-label">监管单位名称：</span><span class="attr-value" id="superviseOrg"></span>
                    </div>
                    <div class="col-md-4">
                      <span class="attr-label">监管负责人：</span><span class="attr-value" id="superviseManager"></span>
                    </div>                    
                    <div class="col-md-4">
                      <span class="attr-label">监管电话：</span><span class="attr-value" id="superviseMobile"></span>
                    </div>
                </div><br>     
                <div class="row">
                    <div class="col-md-12">
                      <span class="attr-label">监管单位地址：</span><span class="attr-value" id="superviseAddress"></span>
                    </div>
                </div><br>                                                              
              </div> 
            </div>
          </div>          
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import YunMap from '../assets/js/YunMap.js';
import Theme from '../assets/js/Theme'
import DataFactory from "../assets/js/DataFactory";



export default {
  data () {
    return {
      vuele: '',
      scene: '',
      camera: '',
      controls: ''
    }
  },
  methods: {

  },
  mounted () {
    let params = {
      yunId : 'indoor3d',
      mold : '3d',  //  2d"或者" 3d"。" 3d"作为默认值。 但 final 结果取决于你的设备。 如果它不支持 WebGL，它将显示 2d 映射，即使你设置了" 3d"。
      url : '/api/map',
      theme : Theme.getDefault3dTheme(),
      movable : true
    };

    // 新建map对象
    let map = YunMap.config(params);

  }
}
</script>

<style scoped>
  @import "../assets/css/yun3D.css"; /*地图样式*/
      /* The Modal (background) */
  .modal {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 999; /* Sit on top */
      padding-top: 20px; /* Location of the box */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  /* Modal Content */
  .modal-content {
      position: relative;
      background-color: #fefefe;
      margin: auto;
      padding: 0;
      border: 1px solid #888;
      width: 600px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
      -webkit-animation-name: animatetop;
      -webkit-animation-duration: 0.4s;
      animation-name: animatetop;
      animation-duration: 0.4s
  }

  /* Add Animation */
  @-webkit-keyframes animatetop {
      from {top:-300px; opacity:0} 
      to {top:0; opacity:1}
  }

  @keyframes animatetop {
      from {top:-300px; opacity:0}
      to {top:0; opacity:1}
  }

  /* The Close Button */
  .close {
      color: white;
      float: right;
      font-size: 28px;
      font-weight: bold;
  }

  .close:hover,
  .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
  }

  .modal-header {
      padding: 2px 16px;
      background-color: #5cb85c;
      color: white;
  }

  .modal-body {padding: 2px 16px;}

  .modal-footer {
      padding: 2px 16px;
      background-color: #5cb85c;
      color: white;
  }
  .attr-label{
    color: #009988;
  }
  .attr-value{
    color: #000000;
  }  
</style>
