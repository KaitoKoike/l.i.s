import { NONE_TYPE } from "@angular/compiler";

const news_inf = {
    '2022-09-30':{
        'date':'2022.09.30',
        'img':'../assets/img/news/y=2022/m=09/news_top.png',
        'ref':'/news202209',
        'title':'2022年9月のメディア掲載情報',
        'before':null,
        'next':'/news202210'
    },
    '2022-10-25':{
        'date':'2022.10.25',
        'img':'../assets/img/news/y=2022/m=10/news_top.png',
        'ref':'/news202210',
        'title':'2022年10月のメディア掲載情報',
        'before':`/news202209`,
        'next':`/news202211`,
    },
    '2022-11-25':{
        'date':'2022.11.25',
        'img':'../assets/img/news/y=2022/m=11/news_top.png',
        'ref':'/news202211',
        'title':'2022年11月のメディア掲載情報',
        'before':`/news202210`,
        'next':'/news202212'
    },
    '2022-12-25':{
        'date':'2022.12.25',
        'img':'../assets/img/news/y=2022/m=12/news_top.png',
        'ref':'/news202212',
        'title':'2022年12月のメディア掲載情報',
        'before':`/news202211`,
        'next':'/news202301'
    },
    '2023-01-30':{
        'date':'2023.01.30',
        'img':'../assets/img/news/y=2023/m=01/news_top.png',
        'ref':'/news202301',
        'title':'2023年1月のメディア掲載情報',
        'before':`/news202212`,
        'next':'/news202303'
    },
    '2023-03-31':{
        'date':'2023.03.31',
        'img':'../assets/img/news/y=2023/m=03/news_top.png',
        'ref':'/news202303',
        'title':'2023年3月のメディア掲載情報',
        'before':`/news202301`,
        'next':'/news202304'
    },
    '2023-04-30':{
        'date':'2023.04.30',
        'img':'../assets/img/news/y=2023/m=04/news_top.png',
        'ref':'/news202304',
        'title':'2023年4月のメディア掲載情報',
        'before':`/news202303`,
        'next':`/news202305`
    },
    '2023-05-31':{
        'date':'2023.05.31',
        'img':'../assets/img/news/y=2023/m=05/news_top.png',
        'ref':'/news202305',
        'title':'2023年5月のメディア掲載情報',
        'before':`/news202304`,
        'next':`/news202306`
    },
    '2023-06-30':{
        'date':'2023.06.30',
        'img':'../assets/img/news/y=2023/m=06/news_top.png',
        'ref':'/news202306',
        'title':'2023年6月のメディア掲載情報',
        'before':`/news202305`,
        'next':`/news202307`
    },
    '2023-07-31':{
        'date':'2023.07.31',
        'img':'../assets/img/news/y=2023/m=07/news_top.png',
        'ref':'/news202307',
        'title':'2023年7月のメディア掲載情報',
        'before':`/news202306`,
        'next':`/news202308`
    },
    '2023-08-31':{
        'date':'2023.08.31',
        'img':'../assets/img/news/y=2023/m=08/news_top.png',
        'ref':'/news202308',
        'title':'2023年8月のメディア掲載情報',
        'before':`/news202307`,
        'next':`/news202309`
    },
    '2023-09-30':{
        'date':'2023.09.30',
        'img':'../assets/img/news/y=2023/m=09/news_top.png',
        'ref':'/news202309',
        'title':'2023年9月のメディア掲載情報',
        'before':`/news202308`,
        'next':`/news202310`
    },
    '2023-10-31':{
        'date':'2023.10.31',
        'img':'../assets/img/news/y=2023/m=10/news_top.png',
        'ref':'/news202310',
        'title':'2023年10月のメディア掲載情報',
        'before':`/news202309`,
        'next':`/news202311`
    },
    '2023-11-30':{
        'date':'2023.11.30',
        'img':'../assets/img/news/y=2023/m=11/news_top.png',
        'ref':'/news202311',
        'title':'2023年11月のメディア掲載情報',
        'before':`/news202310`,
        'next':`/news202312`
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
            'next':'2022093001',
            'img':"../assets/img/news/20210429/news_top.png"
        },
        "news2022093001":{
            'date':'2022.09.30',
            'title':'Drumohrのニット（セーター）とGUY ROVERのポロシャツが、「Choice」No.239号(2022年9月30日発売）で紹介されました',
            'detail':'Drumohrのニット（セーター）とGUY ROVERのポロシャツが、「Choice」No.239号(2022年9月30日発売）で紹介されました',
            'url':null,
            'ref':'/news2022093001',
            'before':'/news2022092901',
            'after':'/news2022102501',
            'img':'../assets/img/news/20220429/news_top.png'
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
    },
    "news202303": {
          "news2023031001": {
            "date": "2023.03.10",
            "title": "DrumohrのクルーネックニットとGUY ROVERのシャツが「MEN'S CLUB」で紹介されました",
            "detail": "DrumohrのクルーネックニットとGUY ROVERのシャツが「MEN'S CLUB」4月号 (2023年3月10日発売）で紹介されました。",
            "url": "https://safarilounge.jp/online/urbansafari/detail.php?id=13118",
            "ref": "/news2023031001",
            "before": null,
            "after": "/news2023031002"
          },
          "news2023031002": {
            "date": "2023.03.15",
            "title": "Drumohrのポロシャツが「Urban Safari」で紹介されました",
            "detail": "Drumohrのポロシャツが「Urban Safari」Vol.32 (2023年3月15日発売）で紹介されました。",
            "url": null,
            "ref": "/news2023031002",
            "before": "/news2023031001",
            "after": "/news2023031003"
          },
          "news2023031003": {
            "date": "2023.03.18",
            "title": "Drumohrのポロシャツが「Safari online」で紹介されました",
            "detail": "Drumohrのポロシャツが「Safari online」公式ウェブマガジン(2023年3月18日公開）で紹介されました。",
            "url": null,
            "ref": "/news2023031003",
            "before": "/news2023031002",
            "after": "/news2023031004"
          },
          "news2023031004": {
            "date": "2023.03.24",
            "title": "Drumohrのジップパーカーが「Safari online」で紹介されました",
            "detail": "Drumohrのジップパーカーが「Safari online」公式ウェブマガジン(2023年3月24日公開）で紹介されました。",
            "url": "https://safarilounge.jp/online/urbansafari/detail.php?id=13118",
            "ref": "/news2023031004",
            "before": "/news2023031003",
            "after": "/news2023031005"
          },
          "news2023031005": {
            "date": "2023.03.25",
            "title": "Drumohrのベストが「Safari」で紹介されました",
            "detail": "Drumohrのベストが「Safari」5月号(2023年3月25日発売）で紹介されました。",
            "url": null,
            "ref": "/news2023031005",
            "before": "/news2023031004",
            "after": "/news2023031006"
          },
          "news2023031006": {
            "date": "2023.03.25",
            "title": "GUY ROVERのシャツが「LEON」で紹介されました",
            "detail": "GUY ROVERのシャツが「LEON」5月号(2023年3月25日発売）で紹介されました。",
            "url": null,
            "ref": "/news2023031006",
            "before": "/news2023031005",
            "after": "/news2023031007"
          },
          "news2023031007": {
            "date": "2023.03.28",
            "title": "DrumohrのクルーネックニットとGUY ROVERのウエスタンシャツが「PEN」で紹介されました",
            "detail": "DrumohrのクルーネックニットとGUY ROVERのウエスタンシャツが「PEN」5月号(2023年3月28日発売）で紹介されました。",
            "url": null,
            "ref": "/news2023031007",
            "before": "/news2023031006",
            "after": "/news2023031008"
          },
          "news2023031008": {
            "date": "2023.03.31",
            "title": "DrumohrのニットポロシャツとGUY ROVERのシャツが「FINE BOYS + SUIT」で紹介されました",
            "detail": "DrumohrのニットポロシャツとGUY ROVERのシャツが「FINE BOYS + SUIT」SPRING&SUMMER号(2023年3月31日発売）で紹介されました。",
            "url": null,
            "ref": "/news2023031008",
            "before": "/news2023031007",
            "after": "/news2023040101"
          }
    },
    "news202304": {
          "news2023040101": {
            "date": "2023.04.01",
            "title": "Drumohrのニット、カーディガン、ポロシャツが「Choice」で紹介されました",
            "detail": "Drumohrのニット、カーディガン、ポロシャツが「Choice」4月号 (2023年4月1日発売）で紹介されました。",
            "url": null,
            "ref": "/news2023040101",
            "before": "/news2023031008",
            "after": "/news2023040102"
          },
          "news2023040102": {
            "date": "2023.04.25",
            "title": "DrumohrのポロシャツとGUY ROVERのシャツが「LEON」で紹介されました",
            "detail": "DrumohrのポロシャツとGUY ROVERのシャツが「LEON」6月号(2023年4月25日発売）で紹介されました。",
            "url": null,
            "ref": "/news2023040102",
            "before": "/news2023040101",
            "after": "/news2023040103"
          },
          "news2023040103": {
            "date": "2023.04.25",
            "title": "GUY ROVERのシャツが「OCEANS」で紹介されました",
            "detail": "GUY ROVERのシャツが「OCEANS」6月号(2023年4月25日発売）で紹介されました。",
            "url": null,
            "ref": "/news2023040103",
            "before": "/news2023040102",
            "after": "/news2023040104"
          },
          "news2023040104": {
            "date": "2023.04.25",
            "title": "GUY ROVERのシャツが「Safari」で紹介されました",
            "detail": "GUY ROVERのシャツが「Safari」6月号(2023年4月25日発売）で紹介されました。",
            "url": null,
            "ref": "/news2023040104",
            "before": "/news2023040103",
            "after": null
          }
    },
    "news202305": {
        "news2023051701": {
          "date": "2023.05.17",
          "title": "Drumohrのニットポロシャツが「LEON」で紹介されました",
          "detail": "Drumohrのニットポロシャツが「LEON」オフィシャルWebサイト (2023年5月17日公開）で紹介されました。",
          "url": "https://www.leon.jp/fashions/173422",
          "ref": "/news2023051701",
          "before": null,
          "after": "/news2023051702"
        },
        "news2023051702": {
          "date": "2023.05.18",
          "title": "Drumohrのポロシャツが「週刊文春」で紹介されました",
          "detail": "Drumohrのポロシャツが「週刊文春」2023年5月18日発売号で紹介されました。",
          "url": null,
          "ref": "/news2023051702",
          "before": "/news2023051701",
          "after": "/news2023051703"
        },
        "news2023051703": {
          "date": "2023.05.22",
          "title": "GUY ROVERのジャケットが「LEON」で紹介されました",
          "detail": "GUY ROVERのジャケットが「LEON」オフィシャルWebサイト (2023年5月22日公開）で紹介されました。",
          "url": "https://www.leon.jp/fashions/173634?page=3",
          "ref": "/news2023051703",
          "before": "/news2023051702",
          "after": "/news2023051704"
        },
        "news2023051704": {
          "date": "2023.05.25",
          "title": "Drumohrのポロシャツが「Safari」で紹介されました",
          "detail": "Drumohrのポロシャツが「Safari」7月号(2023年5月25日発売）で紹介されました。",
          "url": null,
          "ref": "/news2023051704",
          "before": "/news2023051703",
          "after": "/news2023051705"
        },
        "news2023051705": {
          "date": "2023.05.25",
          "title": "Drumohrのクルーネックニットが「LEON」で紹介されました",
          "detail": "Drumohrのクルーネックニットが「LEON」7月号(2023年5月25日発売）で紹介されました。",
          "url": null,
          "ref": "/news2023051705",
          "before": "/news2023051704",
          "after": "/news2023051706"
        },
        "news2023051706": {
          "date": "2023.05.25",
          "title": "GUY ROVERのシャツが「PEN ONLINE」で紹介されました",
          "detail": "GUY ROVERのシャツが「PEN ONLINE」公式サイト (2023年5月25日公開）で紹介されました。",
          "url": "https://www.pen-online.jp/article/013113.html",
          "ref": "/news2023051706",
          "before": "/news2023051705",
          "after": "/news2023051707"
        },
        "news2023051707": {
          "date": "2023.05.25",
          "title": "GUY ROVERのシャツが「Safari」で紹介されました",
          "detail": "GUY ROVERのシャツが「Safari」7月号(2023年5月25日発売）で紹介されました。",
          "url": null,
          "ref": "/news2023051707",
          "before": "/news2023051706",
          "after": "/news2023051708"
        },
        "news2023051708": {
          "date": "2023.05.25",
          "title": "GUY ROVERのジャケットが「LEON」で紹介されました",
          "detail": "GUY ROVERのジャケットが「LEON」7月号(2023年5月25日発売）で紹介されました。",
          "url": null,
          "ref": "/news2023051708",
          "before": "/news2023051707",
          "after": "/news2023051709"
        },
        "news2023051709": {
          "date": "2023.05.27",
          "title": "GUY ROVERのウエスタンシャツが「LEON」で紹介されました",
          "detail": "GUY ROVERのウエスタンシャツが「LEON」オフィシャルWebサイト (2023年5月27日公開）で紹介されました。",
          "url": "https://www.leon.jp/fashions/175832",
          "ref": "/news2023051709",
          "before": "/news2023051708",
          "after": "/news2023062501"
        }
      },
      "news202306": {
        "news2023062501": {
          "date": "2023.06.25",
          "title": "GUY ROVERのシャツが「LEON」で紹介されました",
          "detail": "GUY ROVERのシャツが「LEON」8月号(2023年6月25日発売）で紹介されました。",
          "url": null,
          "ref": "/news2023062501",
          "before": "/news2023051709",
          "after": null
        }
      },
      "news202307": {
        "news2023070301": {
          "date": "2023.07.03",
          "title": "GUY ROVERのシャツが「MEN'S EX ONLINE」で紹介されました",
          "detail": "GUY ROVERのシャツが「​​MEN'S EX ONLINE」公式サイト (2023年7月3日公開）で紹介されました。",
          "url": "https://mens-ex.jp/special/blancpain_230630/",
          "ref": "/news2023070301",
          "before": null,
          "after": "/news2023070302"
        },
        "news2023070302": {
          "date": "2023.07.25",
          "title": "GUY ROVERのバンドカラーシャツが「Safari」で紹介されました",
          "detail": "GUY ROVERのバンドカラーシャツが「Safari」9月号(2023年7月25日発売）で紹介されました。",
          "url": null,
          "ref": "/news2023070302",
          "before": "/news2023070301",
          "after": "/news2023080301"
        }
      },
      "news202308": {
        "news2023080301": {
          "date": "2023.08.25",
          "title": "GUY ROVERのシャツが「Safari」で紹介されました",
          "detail": "GUY ROVERのシャツが「Safari」10月号(2023年8月25日発売）で紹介されました。",
          "url": null,
          "ref": "/news2023080301",
          "before": "/news2023070302",
          "after": "/news2023090301"
        }
      },
      "news202309": {
        "news2023090301": {
          "date": "2023.09.10",
          "title": "GUY ROVERのシャツが「MEN'S CLUB」で紹介されました",
          "detail": "GUY ROVERのシャツが「MEN'S CLUB」秋号(2023年9月10日発売）で紹介されました。",
          "url": null,
          "ref": "/news2023090301",
          "before": "/news2023080301",
          "after": "/news2023090302"
        },
        "news2023090302": {
          "date": "2023.09.21",
          "title": "GUY ROVERのタブカラーシャツが「週刊文春」で紹介されました",
          "detail": "GUY ROVERのタブカラーシャツが「週刊文春」2023年9月21日発売号で紹介されました。",
          "url": null,
          "ref": "/news2023090302",
          "before": "/news2023090301",
          "after": "/news2023090303"
        },
        "news2023090303": {
          "date": "2023.09.25",
          "title": "GUY ROVERのセミワイドカラーシャツが「LEON」で紹介されました",
          "detail": "GUY ROVERのセミワイドカラーシャツが「LEON」11月号(2023年9月25日発売）で紹介されました。",
          "url": null,
          "ref": "/news2023090303",
          "before": "/news2023090302",
          "after": "/news2023090304"
        },
        "news2023090304": {
          "date": "2023.09.28",
          "title": "GUY ROVERのシャツが「MORE」で紹介されました",
          "detail": "GUY ROVERのシャツが「MORE」11月号（2023年9月28日発売号）で紹介されました。",
          "url": null,
          "ref": "/news2023090304",
          "before": "/news2023090303",
          "after": "/news2023090305"
        },
        "news2023090305": {
          "date": "2023.09.29",
          "title": "GUY ROVERのシャツが「FINE BOYS + SUITS」で紹介されました",
          "detail": "GUY ROVERのシャツが「FINE BOYS + SUITS」2023年9月29日発売号で紹介されました。",
          "url": null,
          "ref": "/news2023090305",
          "before": "/news2023090304",
          "after": null
        }
      },
      "news202310": {
        "news2023100201": {
          "date": "2023.10.02",
          "title": "Drumohrのタートルネックニットが「MEN'S EX ONLINE」で紹介されました",
          "detail": "Drumohrのタートルネックニットが「​​MEN'S EX ONLINE」公式サイト (2023年10月2日公開）で紹介されました。",
          "url": "https://www.mens-ex.jp/archives/1261825",
          "ref": "/news2023100201",
          "before": null,
          "after": "/news2023100601"
        },
        "news2023100601": {
          "date": "2023.10.06",
          "title": "Drumohrのモックネックニットが「LEON」で紹介されました",
          "detail": "Drumohrのモックネックニットが「LEON」オフィシャルWebサイト (2023年10月6日公開）で紹介されました。",
          "url": "https://www.leon.jp/fashions/196235",
          "ref": "/news2023100601",
          "before": "/news2023100201",
          "after": "/news2023100602"
        },
        "news2023100602": {
          "date": "2023.10.06",
          "title": "Drumohrのクルーネックニットが「週刊文春」で紹介されました",
          "detail": "Drumohrのクルーネックニットが「週刊文春」1月号(2023年10月6日発売）で紹介されました。",
          "url": null,
          "ref": "/news2023100602",
          "before": "/news2023100601",
          "after": "/news2023101201"
        },
        "news2023101201": {
          "date": "2023.10.12",
          "title": "Drumohrのパーカーが「LEON」で紹介されました",
          "detail": "Drumohrのパーカーが「LEON」オフィシャルWebサイト (2023年10月12日公開）で紹介されました。",
          "url": "https://www.leon.jp/fashions/197172",
          "ref": "/news2023101201",
          "before": "/news2023100602",
          "after": "/news2023101301"
        },
        "news2023101301": {
          "date": "2023.10.13",
          "title": "Drumohrのクルーネックニットが「LEON」で紹介されました",
          "detail": "Drumohrのクルーネックニットが「LEON」オフィシャルWebサイト (2023年10月13日公開）で紹介されました。",
          "url": "https://www.leon.jp/fashions/197162",
          "ref": "/news2023101301",
          "before": "/news2023101201",
          "after": "/news2023102501"
        },
        "news2023102501": {
          "date": "2023.10.25",
          "title": "Drumohrのタートルネックニットとクルーネックニットが「LEON」で紹介されました",
          "detail": "Drumohrのタートルネックニットとクルーネックニットが「LEON」12月号（2023年10月25日発売）で紹介されました。",
          "url": null,
          "ref": "/news2023102501",
          "before": "/news2023101301",
          "after": "/news2023102502"
        },
        "news2023102502": {
          "date": "2023.10.25",
          "title": "Drumohrのタートルネックニットが「MEN'S EX」で紹介されました",
          "detail": "Drumohrのタートルネックニットが「​​MEN'S EX」冬号 (2023年10月25日発売）で紹介されました。",
          "url": null,
          "ref": "/news2023102502",
          "before": "/news2023102501",
          "after": "/news2023102901"
        },
        "news2023102901": {
          "date": "2023.10.29",
          "title": "Drumohrのハイネックニットが「Safari Online」で紹介されました",
          "detail": "Drumohrのハイネックニットが「Safari Online」公式ウェブマガジン（2023年10月29日公開）で紹介されました。",
          "url": "https://safarilounge.jp/online/fashion/detail.php?id=14517",
          "ref": "/news2023102901",
          "before": "/news2023102502",
          "after": "/news2023110101"
        },
        "news2023100701": {
          "date": "2023.10.07",
          "title": "GUY ROVERのシャツが「Safari Online」で紹介されました",
          "detail": "GUY ROVERのシャツが「Safari Online」公式ウェブマガジン (2023年10月7日公開）で紹介されました。",
          "url": "https://safarilounge.jp/online/fashion/detail.php?id=14338&p=1",
          "ref": "/news2023100701",
          "before": null,
          "after": "/news2023101001"
        },
        "news2023101001": {
          "date": "2023.10.10",
          "title": "GUY ROVERのチェックシャツが「LEON」で紹介されました",
          "detail": "GUY ROVERのチェックシャツが「LEON」オフィシャルWebサイト (2023年10月10日公開）で紹介されました。",
          "url": "https://www.leon.jp/fashions/196310",
          "ref": "/news2023101001",
          "before": "/news2023100701",
          "after": null
        }
      },
      "news202311": {
        "news2023110101": {
          "date": "2023.11.16",
          "title": "Drumohrのクルーネックニットが「BEIGIN」で紹介されました",
          "detail": "Drumohrのクルーネックニットが「​​BEIGIN」1月号 (2023年11月16日発売）で紹介されました。",
          "url": null,
          "ref": "/news2023110101",
          "before": "/news2023102901",
          "after": "/news2023110102"
        },
        "news2023110102": {
          "date": "2023.11.公開予定",
          "title": "Drumohrのノルディック柄ニットが「Safari Online」で紹介されました",
          "detail": "Drumohrのノルディック柄ニットが「Safari Online」公式ウェブマガジン (2023年11月公開）で紹介されました。",
          "url": null,
          "ref": "/news2023110102",
          "before": "/news2023110101",
          "after": "/news2023110103"
        },
        "news2023110103": {
          "date": "2023.11.公開予定",
          "title": "Drumohrのモックネックニットが「LEON」で紹介されました",
          "detail": "Drumohrのモックネックニットが「LEON」オフィシャルWebサイト (2023年11月公開）で紹介されました。",
          "url": null,
          "ref": "/news2023110103",
          "before": "/news2023110102",
          "after": null
        }
      }
}

export const NewsTextsProvider = {
    value : news_lists,
    info:news_inf
};