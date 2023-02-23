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
        'next':`/news202211`,
    },
    '2022-11-25':{
        'date':'2022.11.25',
        'img':'../assets/img/news/y=2022/m=11/news_top.jpg',
        'ref':'/news202211',
        'title':'11月のメディア掲載情報',
        'before':`/news202210`,
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
            'after':'/news2022112501'
        }
    },
    'news202211':{
        'news2022112501':{
            'date':'2022.11.25',
            'title':'Drumohrのバッファローシャツが「LEON」で紹介されました',
            'detail':'Drumohrのバッファローシャツが「LEON」オフィシャルWebサイト(2022年11月12日公開）で紹介されました。詳しくは',
            'url':'https://www.leon.jp/fashions/144429',
            'ref':'/news2022112501',
            'before':'/news2022102506',
            'after':'/news2022112502'
        },
        'news2022112502':{
            'date':'2022.11.25',
            'title':'Drumohrのニットが、「LEON」で紹介されました。',
            'detail':'Drumohrのニットが、「LEON」1月号(2022年11月25日発売）で紹介されました。',
            'url':null,
            'ref':'/news2022112502',
            'before':'/news2022112501',
            'after':'/news2022112503'
        },
        'news2022112503':{
            'date':'2022.11.25',
            'title':'Drumohrのニットが、「GOETHE」で紹介されました。',
            'detail':'Drumohrのニットが、「GOETHE」1月号(2022年11月25日発売）で紹介されました。',
            'url':null,
            'ref':'/news2022112503',
            'before':'/news2022112502',
            'after':'/news2022112504'
        },
        'news2022112504':{
            'date':'2022.11.25',
            'title':'GUY ROVERのシャツが「BEGIN」で紹介されました。',
            'detail':'GUY ROVERのシャツが「BEGIN」公式Webサイト(2022年11月28日公開）で紹介されました。詳しくは',
            'url':'https://www.e-begin.jp/article/275398/',
            'ref':'/news2022112504',
            'before':'/news2022112503',
            'after':'/news2022112505'
        },
        'news2022112505':{
            'date':'2022.11.25',
            'title':'GUY ROVERのシャツが「LEON」で紹介されました',
            'detail':'GUY ROVERのシャツが「LEON」オフィシャルWebサイト(2022年11月25日公開）で紹介されました。詳しくは',
            'url':'https://www.leon.jp/fashions/151642?page=3',
            'ref':'/news2022112505',
            'before':'/news2022112504',
            'after':'/news2022112506'
        },
        'news2022112506':{
            'date':'2022.11.25',
            'title':'GUY ROVERのドレスシャツが、「AERA STYLEMAGAZINE」で紹介されました',
            'detail':'GUY ROVERのドレスシャツが、「AERA STYLEMAGAZINE」Vol.53 AUTUMN/WINTERA(2022年11月7日発売）で紹介されました',
            'url':null,
            'ref':'/news2022112506',
            'before':'/news2022112505',
            'after':'/news2022122501'
        },
            
    },
    'news202212':{
        'news2022122501':{
            'date':'2022.12.25',
            'title':'Drumohrのニットが「LEON」で紹介されました',
            'detail':'Drumohrのニットが「LEON」オフィシャルWebサイト(2022年12月19日公開）で紹介されました。詳しくは',
            'url':'https://www.leon.jp/fashions/154457',
            'ref':'/news2022122501',
            'before':'/news2022112506',
            'after':'/news2022122502'
        },
        'news2022122502':{
            'date':'2022.12.25',
            'title':'GUY ROVERのシャツが、「東京カレンダー」で紹介されました',
            'detail':'GUY ROVERのシャツが「東京カレンダー」2月号(2022年12月21日発売）で紹介されました。',
            'url':null,
            'ref':'/news2022122502',
            'before':'/news2022122501',
            'after':'/news2022122503'
        },
        'news2022122503':{
            'date':'2022.12.25',
            'title':'Drumohrのシャツが、「LEON」で紹介されました',
            'detail':'Drumohrのシャツが「LEON」オフィシャルWebサイト(2022年12月22日公開）で紹介されました。詳しくは',
            'url':'https://www.leon.jp/fashions/155090?page=2',
            'ref':'/news2022122503',
            'before':'/news2022122502',
            'after':'/news2022122504'
        },
        'news2022122504':{
            'date':'2022.12.25',
            'title':'Drumohrのモックネックニットが、「Safari」で紹介されました。',
            'detail':'Drumohrのモックネックニットが、「Safari Online」公式ウェブマガジン(2022年12月24日公開）で紹介されました。詳しくは',
            'url':'https://safarilounge.jp/online/fashion/detail.php?id=12584',
            'ref':'/news2022122504',
            'before':'/news2022122503',
            'after':'/news2022122505',
        },
        'news2022122505':{
            'date':'2022.12.25',
            'title':'Drumohrのニットが、「LEON」で紹介されました。',
            'detail':'Drumohrのニットが、「LEON」2月号(2022年12月25日発売）で紹介されました。',
            'url':null,
            'ref':'/news2022122505',
            'before':'/news2022122504',
            'after':'/news2023013001',
        },
    },
    'news202301':{
        'news2023013001':{
            'date':'2023.01.30',
            'title':'Drumohrのニットパンツが「Safari」で紹介されました',
            'detail':'Drumohrのニットパンツが、「Safari Online」公式ウェブマガジン(2023年1月8日公開）で紹介されました。詳しくは',
            'url':'https://safarilounge.jp/online/fashion/detail.php?id=12674&p=4',
            'ref':'/news2023013001',
            'before':'/news2022122505',
            'after':'/news2023013002'
        },
        'news2023013002':{
            'date':'2023.01.30',
            'title':'Drumohrのタートルネックニットが、「Safari」で紹介されました',
            'detail':'Drumohrのタートルネックニットが、「Safari Online」公式ウェブマガジン(2023年1月13日公開）で紹介されました。詳しくは',
            'url':'https://safarilounge.jp/online/fashion/detail.php?id=12699&p=4',
            'ref':'/news2023013002',
            'before':'/news2023013001',
            'after':'/news2023013003'
        },
        'news2023013003':{
            'date':'2023.01.30',
            'title':'UY ROVERのシャツが、「Safari」で紹介されました',
            'detail':'GUY ROVERのシャツが、「Safari Online」公式ウェブマガジン(2023年1月14日公開）で紹介されました。',
            'url':'https://safarilounge.jp/online/fashion/detail.php?id=12713&p=1',
            'ref':'/news2023013003',
            'before':'/news2023013002',
            'after':'/news2023013004'
        },
        'news2023013004':{
            'date':'2023.01.30',
            'title':'Drumohrのモックネックニットが、「LEON」で紹介されました。',
            'detail':'Drumohrのモックネックニットが「LEON」オフィシャルWebサイト(2022年1月30日公開）で紹介されました。詳しくは',
            'url':'https://www.leon.jp/fashions/160195',
            'ref':'/news2023013004',
            'before':'/news2023013003',
            'after':null,
        },
    
}

export const NewsTextsProvider = {
    value : news_lists,
    info:news_inf
};