/**
 * Created by shijiahang on 2016/4/13.
 */


//显示日历函数
function DataShow(SY,SM){

    //获取当月的第一天为星期几
    function  GetFweek(Year,Month)
    {
        var d = new Date(Year,Month);//第二个参数的范围是0-11
        return (d.getDay());
    }

    var firstday=GetFweek(SY,SM);

    //获取当月的天数
    function GetMdays(Year,Month)
    {
        var d = new Date(Year,Month,1);
        d.setDate(32);
        return (32-d.getDate());
    }

    var m_days=GetMdays(SY,SM);

    //拼接字符串
    var d=new Date();
    var dnow=new Date();
    var dnowDay=dnow.getDate();//今日日期
    var sdYear=dnow.getFullYear();    //获取完整的年份(4位)
    var sdMonth=dnow.getMonth();

     var tr_str=Math.ceil((m_days + firstday)/7); //表格所需要行数
    var table="";
    for(var i=0;i<tr_str;i++) { //表格的行
        table+="<tr>";
        for(var k=0;k<7;k++) { //表格每行的单元格
            var idx=i*7+k;  //单元格自然序列号
            var date_str=idx-firstday+1; //计算日期
            (date_str<=0 || date_str>m_days) ? date_str="&nbsp;" : date_str=idx-firstday+1; //过滤无效日期（小于等于零的、大于月总天数的）
            (date_str==dnowDay && SY==sdYear && SM==sdMonth) ? table+= "<td align='center' style='background: #FFBB00; border-radius: 50%;'>" + date_str  : table+= "<td align='center'>" + date_str ;//打印日期：今天底色为橙色
             table+= "</td>";
        }
        table+="</tr>";//表格的行结束
    }
    document.getElementById("calendartable").innerHTML=table;
}

function changeCld(){
    var sYear=document.getElementById('sy').value;
    var sMonth=document.getElementById('sm').value;
    DataShow(sYear,sMonth-1);
}

function calendar(){
    var dnow = new Date();
    var sdYear=dnow.getFullYear();
    var sdMonth=dnow.getMonth();
    var obj=document.getElementById('sy');
    for(var i=1901;i<2050;i++) {
        if(dnow.getFullYear() == i) {
            obj.options.add(new Option(i,i,true,true));
        }
        obj.options.add(new Option(i,i));

    }
    DataShow(sdYear,sdMonth);
}
