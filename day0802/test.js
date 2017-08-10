const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; // 随机整数
const getId_no = () => function getId_no() {
    let coefficientArray = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"];
    let lastNumberArray = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
    let address = "420101";
    let birthday = "19810101";
    let s = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
    let array = (address + birthday + s).split("");
    let total = 0;
    for (let i in array) {
        total = total + parseInt(array[i]) * parseInt(coefficientArray[i])
    }
    let lastNumber = lastNumberArray[parseInt(total % 11)];
    return address + birthday + s + lastNumber;
};

// 生成随机姓名
const getName = () => {
    let familyNames = new Array("赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许", "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏", "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章", "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦", "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳", "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺", "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常", "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余", "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹");
    let givenNames = new Array("子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛", "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊", "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政", "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建", "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋", "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅", "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡", "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕", "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵", "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌");
    let i = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
    let familyName = familyNames[i];
    let j = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
    let givenName = givenNames[i];
    return familyName + givenName;
};

// 生成随机银行卡号
const getBank_account = (bank_no) => {
    let prefix = "";
    switch (bank_no) {
        case "0102":
            prefix = "622202";
            break;
        case "0103":
            prefix = "622848";
            break;
        case "0105":
            prefix = "622700";
            break;
        case "0301":
            prefix = "622262";
            break;
        case "104":
            prefix = "621661";
            break;
        case "0303":
            prefix = "622666";
            break;
        case "305":
            prefix = "622622";
            break;
        case "0306":
            prefix = "622556";
            break;
        case "0308":
            prefix = "622588";
            break;
        case "0410":
            prefix = "622155";
            break;
        case "302":
            prefix = "622689";
            break;
        case "304":
            prefix = "622630";
            break;
        case "309":
            prefix = "622908";
            break;
        case "310":
            prefix = "621717";
            break;
        case "315":
            prefix = "622323";
            break;
        case "316":
            prefix = "622309";
            break;
        default:
            prefix = "622556"
    }
    for (var j = 0; j < 11; j++) { prefix = prefix + Math.floor(Math.random() * 10) }
    return prefix + 11
};


const custName = getName(); // 客户名称
const idNo = getId_no(); // 身份证号码
const idValidityEnd = 20991212; // 身份证到期日期
const birthday = 19991212; // 出生日期
const addr = "上海虹口测试"; //联系地址
const mobile = `18${randomInt(100000000,999999999)}`; // 手机号码
const bankRegionCode = 305121010000; // 联行号
const bankRegionName = "中国民生银行石家庄分行"; // 银行名称
const bankAcct = `${randomInt(50000000000000,99999999999999)}` + 1111; // 银行卡号
const currency = 156; // 银行编码
const appDt = 20170731; // 申请日期
const appTm = 130000; // 申请时间

postman.clearEnvironmentVariable("custName");
postman.clearEnvironmentVariable("idNo");
postman.clearEnvironmentVariable("mobile");




postman.setEnvironmentVariable("custName", custName);
postman.setEnvironmentVariable("idNo", idNo);
postman.setEnvironmentVariable("idValidityEnd", idValidityEnd);
postman.setEnvironmentVariable("birthday", birthday);
postman.setEnvironmentVariable("mobile", mobile);
postman.setEnvironmentVariable("bankRegionCode", bankRegionCode);
postman.setEnvironmentVariable("bankRegionName", bankRegionName);
postman.setEnvironmentVariable("bankAcct", bankAcct);
postman.setEnvironmentVariable("appDt", appDt);
postman.setEnvironmentVariable("appTm", appTm);