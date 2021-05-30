<template>
  <div id="detail_params" v-if="Object.keys(paramInfo).length != 0">
      

       

                <table v-for="(table,index) in paramInfo.rule.tables" :key="index" class="info-size">
                    <tr v-for="(tr,index) in table" :key="index">
                        <td v-for="(td ,index) in tr" :key="index">{{td}}</td>
                    </tr>
                </table>
        

        <table class="info-param">

                <tr v-for="(info,index) in paramInfo.info.set" :key="index"  class="info_bottom">
                    <td class="info-param-key">{{info.key}}</td>
                    <td class="param-value">{{info.value}}</td>
                </tr>
        </table>

        <div class="info-img" v-if="paramInfo.info.images">
            <img :src="paramInfo.info.images[0]">
        </div>

  </div>
</template>
<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style>

 .info-size{
    width: 100%;
    border-collapse: collapse;
}

.info-size  table tr{
    height: 42px;
   
}

.param-info table tr td{
    border-bottom: 1px solid rgba(100,100,100,1);

}
.param-info-key{
    /* 当value的数据量比较大的时候，会挤到key,所以给一个的宽度 */

    width: 95px;
    
}
.info-param-key{
    font-size: 15px;
    padding:0 5px;
    width: 30px;
   
}

.info-param{
    border-top: 1px solid rgba(0,0,0,1);
}
.param-value{
    color: #eb4868;
}
.info-img{
    width: 100%;
}
table{
    width:100% ;
}
.info_bottom{
   border-bottom: 2px solid gray;
}
.info_bottom td{
     border-bottom: 1px solid gray;
     padding: 5px 10px;
     font-size: 13px;
}
</style>