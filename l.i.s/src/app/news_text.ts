import { NONE_TYPE } from "@angular/compiler";

const news_inf = {
    '2022-09-30':{
        'date':'2022.09.30',
        'img':'../assets/img/news/20210429/news_top.png',
        'ref':'/news202209',
        'title':'9月のメディア掲載情報を掲載しました。',
        'before':null,
        'next':null
    }
    
}

const news_conf = {
    'date':'2021-04-29',
    'title':'4/30～　Drumohr オンラインショップ 40％OFF キャンペーン開催',
    'before':'/newslist',
    'next':'/TopPage',
    'detail':`いつもドルモア オンラインショップをご利用いただきありがとうございます。<br>
    <br>
    ドルモア オンラインショップでは、上記日程より一部の商品に対して40％OFFでお買物をお楽しみいただけます。お得なこの機会をどうぞお見逃しなく。<br>
    <br>
    ■開催期間：4/30(金)～<br>
    ※ご利用における注意点<br>
    ・40%OFFキャンペーン対象品にてご購入いただいた商品のご返品は、お受けいたしかねます。`
  } 

const news_lists = {
    "news2022092101":{
        'date':'2022.09.21',
        'title':'GUY ROVERのシャツが「LEON」で紹介されました',
        'detail':'GUY ROVERのシャツが「LEON」オフィシャルWebサイト(2022年9月21日公開）で紹介されました。詳しくは',
        'url':'https://www.leon.jp/fashions/139886?page=2',
        'ref':'/news2022092101',
        'before':'',
        'next':'/news2022092102',
        'img':"../assets/img/news/20210429/news_top.png"
    },
    "news2022092102":{
        'date':'2022.09.21',
        'title':'GUY ROVERのシャツジャケットが「Safari Online」で紹介されました',
        'detail':'GUY ROVERのシャツジャケットが「Safari Online」(2022年9月21日公開）で紹介されました。詳しくは',
        'url':'https://safarilounge.jp/online/fashion/detail.php?id=11745&p=5',
        'ref':'/news2022092102',
        'before':'/news2022092101',
        'next':'/news2022092301',
        'img':"../assets/img/news/20210429/news_top.png"
    },
    "news2022092301":{
        'date':'2022.09.23',
        'title':'Drumohrのタートルニットが「LEON」で紹介されました',
        'detail':'Drumohrのタートルニットが「LEON」オフィシャルWebサイト(2022年9月23日公開）で紹介されました。詳しくは',
        'url':'https://www.leon.jp/fashions/140196?page=2',
        'ref':'/news2022092301',
        'before':'/news2022092102',
        'next':'/news2022092302',
        'img':"../assets/img/news/20210429/news_top.png"
    },
    "news2022092302":{
        'date':'2022.09.23',
        'title':'GUY ROVERのバッファローシャツが「LEON」で紹介されました',
        'detail':'GUY ROVERのバッファローシャツが「LEON」オフィシャルWebサイト(2022年9月23日公開）で紹介されました。詳しくは',
        'url':'https://www.leon.jp/fashions/140196?page=3',
        'ref':'/news2022092302',
        'before':'/news2022092301',
        'next':'/news2022092401',
        'img':"../assets/img/news/20210429/news_top.png"
    },
    "news2022092401":{
        'date':'2022.09.24',
        'title':'DrumohrのタートルネックニットとGUY ROVERのシャツが「Safari」で紹介されました',
        'detail':'DrumohrのタートルネックニットとGUY ROVERのシャツが、「Safari」11月号(2022年9月24日発売）で紹介されました',
        'url':null,
        'ref':'/news2022092401',
        'before':'/news2022092302',
        'next':'/news2022092402',
        'img':"../assets/img/news/20210429/news_top.png"
    },
    "news2022092402":{
        'date':'2022.09.24',
        'title':'DrumohrのモックネックニットとGUY ROVERのシャツが「LEON」で紹介されました',
        'detail':'DrumohrのモックネックニットとGUY ROVERのシャツが、「LEON」11月号(2022年9月24日発売）で紹介されました。',
        'url':null,
        'ref':'/news2022092402',
        'before':'/news2022092401',
        'next':'/news2022092801',
        'img':"../assets/img/news/20210429/news_top.png"
    },
    "news2022092801":{
        'date':'2022.09.28',
        'title':'DrumohrのモックネックニットとGUY ROVERのシャツが「FINE BOYS」で紹介されました',
        'detail':'DrumohrのモックネックニットとGUY ROVERのシャツが、「FINE BOYS + SUIT AUTUMN&WINTER 2022」(2022年9月28日発売）で紹介されました。',
        'url':null,
        'ref':'/news2022092801',
        'before':'/news2022092402',
        'next':'/news2022092901',
        'img':"../assets/img/news/20210429/news_top.png"
    },
    "news2022092901":{
        'date':'2022.09.29',
        'title':'Drumohrのモックネックニットが「週刊文春」で紹介されました',
        'detail':'Drumohrのモックネックニットが「週刊文春」(2022年9月29日発売）で紹介されました。',
        'url':null,
        'ref':'/news2022092901',
        'before':'/news2022092801',
        'next':null,
        'img':"../assets/img/news/20210429/news_top.png"
    }
}

export const NewsTextsProvider = {
    value : news_lists,
    info:news_inf
};