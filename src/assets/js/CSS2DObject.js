/**
 * @author mrdoob / http://mrdoob.com/
 */
import * as THREE from "three";
import $ from "jquery";
import {jsonp} from "../jsonptool.js";
import {post,get,patch,put} from "../axiostool.js";
let CSS2DObject = function ( element ) {
  THREE.Object3D.call( this );
  this.element = element;
  this.element.style.position = 'absolute';


  // touchstart  触摸屏
  this.element.addEventListener( 'click', function ( event ) {
    let enlarge = document.getElementById('enlarge');
    enlarge.innerHTML = '';
    let img = document.createElement( 'img' );
    img.className = 'details';
    img.setAttribute("src",this.src);
    img.addEventListener( 'click', function ( event ) {
      let enlarge = document.getElementById('enlarge');
      enlarge.innerHTML = '';
    });
    
    if (this.src !== undefined){
      //enlarge.appendChild(img);
      let fid = $(this).attr('fid');
      let branchImg = $(this).attr('src');
      get('api/branchinfo/list', {
        fid: fid,
      }).then((res) => {
        if(res.code==0){
          if(res.data.length>0){
            let barchinfo = res.data[0];
            get('api/sysdict/group/405', {
              
            }).then((res) => {
              if(res.code==0){
                if(res.data.length>0){
                  for(var i=0;i<res.data.length;i++){
                    if(barchinfo.branchType == res.data[i].dictDtlId){
                      document.getElementById('branchType').innerText = res.data[i].dictName;
                      break;
                    }
                  }
                }
              }
            })
            get('api/branchinfo/list', {
              fid: barchinfo.fatherId,
            }).then((res) => {
              if(res.code==0){
                if(res.data.length>0){
                  document.getElementById('fatherName').innerText = res.data[0].branchName;
                }
              }
            })
            document.getElementById('branchCode').innerText = barchinfo.branchCode;
            document.getElementById('branchName').innerText = barchinfo.branchName;
            // get('api/branchkind/tree', {
              
            // }).then((res) => {
            //   if(res.code==0){
            //     if(res.data.length>0){
            //       for(var i=0;i<res.data.length;i++){
            //         if(barchinfo.kindTypeId == res.data[i].value){
            //           document.getElementById('kindTypeId').innerText = res.data[i].name;
            //           break;
            //         }else if(res.data[i].children!=null){
            //           for(var v=0;v<res.data[i].children.length;v++){
            //             if(barchinfo.kindTypeId == res.data[i].children[v].value){
            //               document.getElementById('kindTypeId').innerText = res.data[i].children[v].name;
            //               break;
            //             }
            //           }
            //         }
            //       }
            //     }
            //   }
            // })
            document.getElementById('kindTypeName').innerText = barchinfo.kindTypeName;
            document.getElementById('simName').innerText = '';
            document.getElementById('shortName').innerText = barchinfo.shortName;
            document.getElementById('managerUserName').innerText = barchinfo.managerUserName;
            document.getElementById('telno').innerText = barchinfo.telno;
            let starCounts = {1: '0.5', 2: '1', 3: '1.5', 4: '2', 5: '2.5', 6: '3', 7: '3.5', 8: '4', 9: '4.5', 10: '5'};
            document.getElementById('starCount').innerText = starCounts[barchinfo.starCount];            
            document.getElementById('managerImageUrl').setAttribute("src",'http://114.215.176.131:9091/layboot/'+barchinfo.managerImageUrl);
            document.getElementById('scoreCount').innerText = barchinfo.scoreCount;
            get('api/basarea/tree', {
              
            }).then((res) => {
              if(res.code==0){
                if(res.data.length>0&&barchinfo.basAreaPath!=null){
                  let basAreaPaths = barchinfo.basAreaPath.split("/");
                  let basAreaPathName = '';
                  let currentIndex= 0;
                  sheng:
                  for(var d=0;d<basAreaPaths.length;d++){
                    for(var i=0;i<res.data.length;i++){
                      if(basAreaPaths[currentIndex] == res.data[i].value){
                        basAreaPathName += res.data[i].name;
                        currentIndex+=1;
                        if(currentIndex==basAreaPaths.length){
                          break sheng;
                        }else{
                          basAreaPathName += '/';
                        }
                        if(res.data[i].children!=null){
                          for(var j=0;j<res.data[i].children.length;j++){
                            if(basAreaPaths[currentIndex] == res.data[i].children[j].value){
                              basAreaPathName += res.data[i].children[j].name;
                              currentIndex+=1;
                              if(currentIndex==basAreaPaths.length){
                                break sheng;
                              }else{
                                basAreaPathName += '/';
                              }
                              if(res.data[i].children[j].children!=null){
                                for(var v=0;v<res.data[i].children[j].children.length;v++){
                                  if(basAreaPaths[currentIndex] == res.data[i].children[j].children[v].value){
                                    basAreaPathName += res.data[i].children[j].children[v].name;
                                    currentIndex+=1;
                                    if(currentIndex==basAreaPaths.length){
                                      break sheng;
                                    }else{
                                      basAreaPathName += '/';
                                    }
                                    if(res.data[i].children[j].children[v].children!=null){
                                      for(var z=0;z<res.data[i].children[j].children[v].children.length;z++){
                                        if(basAreaPaths[currentIndex] == res.data[i].children[j].children[v].children[z].value){
                                          basAreaPathName += res.data[i].children[j].children[v].children[z].name;
                                          currentIndex+=1;
                                          if(currentIndex==basAreaPaths.length){
                                            break sheng;
                                          }else{
                                            basAreaPathName += '/';
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  document.getElementById('basAreaPath').innerText = basAreaPathName;
                }
              }
            })
            document.getElementById('zipcode').innerText = barchinfo.zipcode;
            document.getElementById('address').innerText = barchinfo.address;
            document.getElementById('shopCategoryNames').innerText = barchinfo.shopCategoryNames;
            document.getElementById('businessUrl').setAttribute("src",'http://114.215.176.131:9091/layboot/'+barchinfo.businessUrl);
            document.getElementById('businessCode').innerText = barchinfo.businessCode;
            document.getElementById('businessCode').innerText = barchinfo.businessCode;
            document.getElementById('identityUrl').setAttribute("src",'http://114.215.176.131:9091/layboot/'+barchinfo.identityUrl);
            document.getElementById('identityCode').innerText = barchinfo.identityCode;

            get('api/branchinfo/list', {
              branchType:3,
              statusId:1,
            }).then((res) => {
              if(res.code==0){
                if(res.data.length>0){
                  for(var i=0;i<res.data.length;i++){
                    if(barchinfo.settleBranchId == res.data[i].fid){
                      document.getElementById('settleBranchId').innerText = res.data[i].branchName;
                      break;
                    }
                  }
                }
              }
            })
            document.getElementById('acreageCount').innerText = barchinfo.acreageCount;
            get('api/flaginfo/list', {
              typeId:1,
            }).then((res) => {
              if(res.code==0){
                if(res.data.length>0){
                  let flagIdses = barchinfo.flagIds.split(',');
                  let flagIdsNames = '';
                  for(var v=0;v<flagIdses.length;v++){
                    for(var i=0;i<res.data.length;i++){
                      if(flagIdses[v] == res.data[i].fid){
                        flagIdsNames+= res.data[i].flagName;
                      }
                    }
                  }
                  document.getElementById('flagIds').innerText = flagIdsNames;
                }
              }
            })
            document.getElementById('settleDays').innerText = barchinfo.settleDays;
            document.getElementById('payDays').innerText = barchinfo.payDays;
            document.getElementById('pledgeDays').innerText = barchinfo.pledgeDays;
            document.getElementById('pledgeRate').innerText = barchinfo.pledgeRate;
            get('api/sysdict/group/198', {
              
            }).then((res) => {
              if(res.code==0){
                if(res.data.length>0){
                  for(var i=0;i<res.data.length;i++){
                    if(barchinfo.branchScope == res.data[i].dictDtlId){
                      document.getElementById('branchScope').innerText = res.data[i].dictName;
                      break;
                    }
                  }
                }
              }
            })
            document.getElementById('safeManager').innerText = barchinfo.safeManager;
            document.getElementById('safeMobile').innerText = barchinfo.safeMobile;
            document.getElementById('surveyorName').innerText = barchinfo.surveyorName;
            document.getElementById('superviseOrg').innerText = barchinfo.superviseOrg;
            document.getElementById('superviseManager').innerText = barchinfo.superviseManager;
            document.getElementById('superviseManager').innerText = barchinfo.superviseManager;
            document.getElementById('superviseMobile').innerText = barchinfo.superviseMobile;
            document.getElementById('superviseAddress').innerText = barchinfo.superviseAddress;
            var modal = document.getElementById('myModal');
            modal.style.display = "block";
            var span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
              modal.style.display = "none";
            }
            $('#myTab li:eq(0) a').tab('show');
          }
        }
      })
    }
  });
};

CSS2DObject.prototype = Object.create( THREE.Object3D.prototype );
CSS2DObject.prototype.constructor = CSS2DObject;

let CSS2DRenderer = function () {
  var _width, _height;
  var _widthHalf, _heightHalf;
  var vector = new THREE.Vector3();
  var viewMatrix = new THREE.Matrix4();
  var viewProjectionMatrix = new THREE.Matrix4();

  var cache = {
    objects: new WeakMap()
  };

  var domElement = document.createElement( 'div' );
  domElement.style.overflow = 'hidden';
  this.domElement = domElement;

  // 清除内容
  this.clear = function (){
    this.domElement.innerHTML = '';
  };

  this.getSize = function () {
    return {
      width: _width,
      height: _height
    };
  };

  this.setSize = function ( width, height ) {
    _width = width;
    _height = height;

    _widthHalf = _width / 2;
    _heightHalf = _height / 2;

    domElement.style.width = width + 'px';
    domElement.style.height = height + 'px';

  };

  var renderObject = function ( object, camera ) {
    if ( object instanceof CSS2DObject ) {
      vector.setFromMatrixPosition( object.matrixWorld );
      vector.applyMatrix4( viewProjectionMatrix );

      var element = object.element;
      var style = 'translate(-50%,-50%) translate(' + ( vector.x * _widthHalf + _widthHalf ) + 'px,' + ( - vector.y * _heightHalf + _heightHalf ) + 'px)';

      element.style.WebkitTransform = style;
      element.style.MozTransform = style;
      element.style.oTransform = style;
      element.style.transform = style;

      var objectData = {
        distanceToCameraSquared: getDistanceToSquared( camera, object )
      };

      cache.objects.set( object, objectData );
      if ( element.parentNode !== domElement ) {
        domElement.appendChild( element );
      }
    }

    for ( var i = 0, l = object.children.length; i < l; i ++ ) {
      renderObject( object.children[ i ], camera );
    }
  };
  var getDistanceToSquared = function () {
    var a = new THREE.Vector3();
    var b = new THREE.Vector3();
    return function ( object1, object2 ) {
      a.setFromMatrixPosition( object1.matrixWorld );
      b.setFromMatrixPosition( object2.matrixWorld );
      return a.distanceToSquared( b );
    };
  }();

  var filterAndFlatten = function ( scene ) {
    var result = [];
    scene.traverse( function ( object ) {
      if ( object instanceof CSS2DObject ) result.push( object );
    } );
    return result;
  };
  var zOrder = function ( scene ) {
    var sorted = filterAndFlatten( scene ).sort( function ( a, b ) {
      var distanceA = cache.objects.get( a ).distanceToCameraSquared;
      var distanceB = cache.objects.get( b ).distanceToCameraSquared;
      return distanceA - distanceB;
    } );

    var zMax = sorted.length;
    for ( var i = 0, l = sorted.length; i < l; i ++ ) {
      sorted[ i ].element.style.zIndex = zMax - i;
    }

  };

  this.render = function ( scene, camera ) {
    scene.updateMatrixWorld();
    if ( camera.parent === null ) camera.updateMatrixWorld();
    viewMatrix.copy( camera.matrixWorldInverse );
    viewProjectionMatrix.multiplyMatrices( camera.projectionMatrix, viewMatrix );
    renderObject( scene, camera );
    zOrder( scene );
  };
};
export {CSS2DRenderer,CSS2DObject}
