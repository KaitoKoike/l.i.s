import { NONE_TYPE } from "@angular/compiler";

const news_inf = {
    '2022-09-30':{
        'date':'2022.09.30',
        'img':'../assets/img/news/20210429/news_top.JPG',
        'ref':'/news202209',
        'title':'9月のメディア掲載情報',
        'before':null,
        'next':'/news202210'
    },
    '2022-10-25':{
        'date':'2022.10.25',
        'img':'../assets/img/news/20210429/news_top.JPG',
        'ref':'/news202210',
        'title':'10月のメディア掲載情報',
        'before':`/news202209`,
        'next':null
    }
    
}

const news_lists = {
    'news202209':{
        "news2022092101":{
            'date':'2022.09.21',
            'title':'GUY ROVERのシャツが「LEON」で紹介されました',
            'detail':'GUY ROVERのシャツが「LEON」オフィシャルWebサイト(2022年9月21日公開）で紹介されました。詳しくは',
            'url':'https://www.leon.jp/fashions/139886?page=2',
            'ref':'/news2022092101',
            'before':'',
            'next':'/news2022092102',
            'img':"../assets/img/news/20210429/news_top.JPG"
        },
        "news2022092102":{
            'date':'2022.09.21',
            'title':'GUY ROVERのシャツジャケットが「Safari Online」で紹介されました',
            'detail':'GUY ROVERのシャツジャケットが「Safari Online」(2022年9月21日公開）で紹介されました。詳しくは',
            'url':'https://safarilounge.jp/online/fashion/detail.php?id=11745&p=5',
            'ref':'/news2022092102',
            'before':'/news2022092101',
            'next':'/news2022092301',
            'img':"../assets/img/news/20210429/news_top.JPG"
        },
        "news2022092301":{
            'date':'2022.09.23',
            'title':'Drumohrのタートルニットが「LEON」で紹介されました',
            'detail':'Drumohrのタートルニットが「LEON」オフィシャルWebサイト(2022年9月23日公開）で紹介されました。詳しくは',
            'url':'https://www.leon.jp/fashions/140196?page=2',
            'ref':'/news2022092301',
            'before':'/news2022092102',
            'next':'/news2022092302',
            'img':"../assets/img/news/20210429/news_top.JPG"
        },
        "news2022092302":{
            'date':'2022.09.23',
            'title':'GUY ROVERのバッファローシャツが「LEON」で紹介されました',
            'detail':'GUY ROVERのバッファローシャツが「LEON」オフィシャルWebサイト(2022年9月23日公開）で紹介されました。詳しくは',
            'url':'https://www.leon.jp/fashions/140196?page=3',
            'ref':'/news2022092302',
            'before':'/news2022092301',
            'next':'/news2022092401',
            'img':"../assets/img/news/20210429/news_top.JPG"
        },
        "news2022092401":{
            'date':'2022.09.24',
            'title':'DrumohrのタートルネックニットとGUY ROVERのシャツが「Safari」で紹介されました',
            'detail':'DrumohrのタートルネックニットとGUY ROVERのシャツが、「Safari」11月号(2022年9月24日発売）で紹介されました',
            'url':null,
            'ref':'/news2022092401',
            'before':'/news2022092302',
            'next':'/news2022092402',
            'img':"../assets/img/news/20210429/news_top.JPG"
        },
        "news2022092402":{
            'date':'2022.09.24',
            'title':'DrumohrのモックネックニットとGUY ROVERのシャツが「LEON」で紹介されました',
            'detail':'DrumohrのモックネックニットとGUY ROVERのシャツが、「LEON」11月号(2022年9月24日発売）で紹介されました。',
            'url':null,
            'ref':'/news2022092402',
            'before':'/news2022092401',
            'next':'/news2022092801',
            'img':"../assets/img/news/20210429/news_top.JPG"
        },
        "news2022092801":{
            'date':'2022.09.28',
            'title':'DrumohrのモックネックニットとGUY ROVERのシャツが「FINE BOYS」で紹介されました',
            'detail':'DrumohrのモックネックニットとGUY ROVERのシャツが、「FINE BOYS + SUIT AUTUMN&WINTER 2022」(2022年9月28日発売）で紹介されました。',
            'url':null,
            'ref':'/news2022092801',
            'before':'/news2022092402',
            'next':'/news2022092901',
            'img':"../assets/img/news/20210429/news_top.JPG"
        },
        "news2022092901":{
            'date':'2022.09.29',
            'title':'Drumohrのモックネックニットが「週刊文春」で紹介されました',
            'detail':'Drumohrのモックネックニットが「週刊文春」(2022年9月29日発売）で紹介されました。',
            'url':null,
            'ref':'/news2022092901',
            'before':'/news2022092801',
            'next':'2022093001',
            'img':"../assets/img/news/20210429/news_top.JPG"
        },
        "news2022093001":{
            'date':'2022.09.30',
            'title':'Drumohrのニット（セーター）とGUY ROVERのポロシャツが、「Choice」No.239号(2022年9月30日発売）で紹介されました',
            'detail':'Drumohrのニット（セーター）とGUY ROVERのポロシャツが、「Choice」No.239号(2022年9月30日発売）で紹介されました',
            'url':null,
            'ref':'/news2022093001',
            'before':'/news2022092901',
            'after':'/news2022102501',
            'img':'../assets/img/news/20220429/news_top.JPG'
        }
    },
    'news202210':{
        "news2022102501":{
            'date':'2022.10.25',
            'title':'DrumohrのタートルネックニットとGUY ROVERのシャツが、「GOETHE」12月号(2022年10月25日発売）で紹介されました',
            'detail':'DrumohrのタートルネックニットとGUY ROVERのシャツが、「GOETHE」12月号(2022年10月25日発売）で紹介されました',
            'url':null,
            'ref':'/news2022102501',
            'before':'/news2022093001',
            'after':'/news2022102502'
        },
        "news2022102502":{
            'date':'2022.10.25',
            'title': "Drumohrのニット（セーター）が、「MEN'S CLUB」12月号(2022年10月25日発売）で紹介されました",
            'detail':"Drumohrのニット（セーター）が、「MEN'S CLUB」12月号(2022年10月25日発売）で紹介されました",
            'url':null,
            'ref':'/news2022102502',
            'before':'/news2022102501',
            'after':'/news2022102503'
        },
        "news2022102503":{
            'date':'2022.10.25',
            'title':'GUY ROVERのジャケットが、「OCEANS」12月号(2022年10月25日発売）で紹介されました',
            'detail':'GUY ROVERのジャケットが、「OCEANS」12月号(2022年10月25日発売）で紹介されました',
            'url':null,
            'ref':'/news2022102503',
            'before':'/news2022102502',
            'after':'/news2022102504'
        },
        "news2022102505":{
            'date':'2022.10.25',
            'title':'GUY ROVERのシャツが、「LEON」12月号(2022年10月25日発売）で紹介されました',
            'detail':'GUY ROVERのシャツが、「LEON」12月号(2022年10月25日発売）で紹介されました',
            'url':null,
            'ref':'/news2022102505',
            'before':'/news2022102504',
            'after':'/news2022102506'
        },
        "news2022102506":{
            'date':'2022.10.25',
            'title':'GUY ROVERのジャケットが、「Safari」12月号(2022年10月25日発売）で紹介されました',
            'detail':'GUY ROVERのジャケットが、「Safari」12月号(2022年10月25日発売）で紹介されました',
            'url':null,
            'ref':'/news2022102506',
            'before':'/news2022102505',
            'after':null
        }
    }
}

export const NewsTextsProvider = {
    value : news_lists,
    info:news_inf
};