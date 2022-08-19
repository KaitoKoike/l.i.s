import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {sendEmailService} from '../config/config.service'

export function PostalCodeValidator(control: AbstractControl): ValidationErrors {
  return !control.value ||/^[0-9]{7}$/.test(control.value) ? {} : { 'postal_code': true };
}
export function PostalCodeValitorMessage(error:any,field:FormlyFieldConfig){
  return `"${field.formControl?.value}" は正しい郵便番号ではありません`;}


  export function EmailValidator(control: AbstractControl): ValidationErrors {
    return /.+@.+\..+/.test(control.value) ? {} : { 'email': true };
  }
  export function EmailValitorMessage(error:any,field:FormlyFieldConfig){
    return `"${field.formControl?.value}" は正しい形式のメールアドレスではありません`;}

    
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
  providers:[sendEmailService],
})
export class HelpComponent {

  constructor(private mailer:sendEmailService){ }
  form = new FormGroup({});
    
  model = {
    brand:'guyrover',
    name:'',
    kana:'',
    help_content:'',
    postalcode:'',
    address:'',
    pref:'pref',
    phone_num:'',
    email:'',
  };
  fields:FormlyFieldConfig[] = [
    {
      key:'name',
      wrappers:['help-form'],
      type:'input',
      props:{
        key:'kanji',
        type:'input',
        label:'氏名',
        placeholder:'',
        required:true,
        labelPosition:'floating',
        attributes:{
          style:"width:100%;max-width:327px;height:38px;border-radius:0px;border: 1px solid #C8C8C8;"
        },
      },      
    },
    {
      key:'kana',
      wrappers:['help-form'],
      type:'input',
      props:{
        key:'kana',
        label:'フリガナ',
        required:true,
        minLength:1,  
        labelPosition:'floating',
        attributes:{
          style:"width:100%;max-width:327px;height:38px;border-radius:0px;border: 1px solid #C8C8C8;"

        },
        
      },      
    },
    {
      key:'postalcode',
      wrappers:['help-form'],
      type:'input',
      props:{
        key:'postalcode',
        label:'郵便番号',
        placeholder:'1234567',
        maxLength:7,
        labelPosition:'floating',
        attributes:{
          style:"width:100%;max-width:327px;height:38px;border-radius:0px;border: 1px solid #C8C8C8;"
        },
      },
      validators:{
        validation:['postal_code']
      } 
    },
    {
      key:'pref',
      wrappers:['help-form'],
      type:'select',
      props:{
        key:'pref',
        label:'都道府県',
        placeholder:'選択してください',
        options:[
          {value: '北海道', label: '北海道'},
          {value: '青森県', label: '青森県'},
          {value: '岩手県', label: '岩手県'},
          {value: '宮城県', label: '宮城県'},
          {value: '秋田県', label: '秋田県'},
          {value: '山形県', label: '山形県'},
          {value: '福島県', label: '福島県'},
          {value: '茨城県', label: '茨城県'},
          {value: '栃木県', label: '栃木県'},
          {value: '群馬県', label: '群馬県'},
          {value: '埼玉県', label: '埼玉県'},
          {value: '千葉県', label: '千葉県'},
          {value: '東京都', label: '東京都'},
          {value: '神奈川県', label: '神奈川県'},
          {value: '新潟県', label: '新潟県'},
          {value: '富山県', label: '富山県'},
          {value: '石川県', label: '石川県'},
          {value: '福井県', label: '福井県'},
          {value: '山梨県', label: '山梨県'},
          {value: '長野県', label: '長野県'},
          {value: '岐阜県', label: '岐阜県'},
          {value: '静岡県', label: '静岡県'},
          {value: '愛知県', label: '愛知県'},
          {value: '三重県', label: '三重県'},
          {value: '滋賀県', label: '滋賀県'},
          {value: '京都府', label: '京都府'},
          {value: '大阪府', label: '大阪府'},
          {value: '兵庫県', label: '兵庫県'},
          {value: '奈良県', label: '奈良県'},
          {value: '和歌山県', label: '和歌山県'},
          {value: '鳥取県', label: '鳥取県'},
          {value: '島根県', label: '島根県'},
          {value: '岡山県', label: '岡山県'},
          {value: '広島県', label: '広島県'},
          {value: '山口県', label: '山口県'},
          {value: '徳島県', label: '徳島県'},
          {value: '香川県', label: '香川県'},
          {value: '愛媛県', label: '愛媛県'},
          {value: '高知県', label: '高知県'},
          {value: '福岡県', label: '福岡県'},
          {value: '佐賀県', label: '佐賀県'},
          {value: '長崎県', label: '長崎県'},
          {value: '熊本県', label: '熊本県'},
          {value: '大分県', label: '大分県'},
          {value: '宮崎県', label: '宮崎県'},
          {value: '鹿児島県', label: '鹿児島県'},
          {value: '沖縄県', label: '沖縄県'}
          ],
        required:false,        
        labelPosition:'floating',
        attributes:{
          style:"width:100%;max-width:327px;height:38px;border-radius:0px;border: 1px solid #C8C8C8;"
        },
      },
    },
    {
      key:'address',
      type:'input',
      wrappers:['help-form'],
      props:{
        label:'住所',
        placeholder:'',
        required:false,
        labelPosition:'block',
        description:'市区町村・番地・建物名・部屋番号',
        attributes:{
          style:'width:100%;height:38px;border-radius:0px;border: 1px solid #C8C8C8;'
        },
      },
    },
    {
      key:'email',
      wrappers:['help-form'],
      type:'input',
      props:{
        key:'email',
        type:'input',
        label:'メールアドレス',
        required:true, 
        labelPosition:'floating',
        attributes:{
          style:'width:100%;height:38px;border-radius:0px;border: 1px solid #C8C8C8;'
        },
      },
      validators:{
        validation:['email']
      }       
    },
    {
      key:'phone_num',
      wrappers:['help-form'],
      type:'input',
      props:{
        key:'phonenumber',
        type:'input',
        label:'電話番号',
        required:false, 
        labelPosition:'floating',
        attributes:{
          style:'width:100%;max-width:327px;height:38px;border-radius:0px;border: 1px solid #C8C8C8;'
        },
      },      
    },
    {
      key:'help_content',
      wrappers:['help-form'],
      type:'textarea',
      props:{
        key:'content',
        type:'text',
        label:'お問い合わせ内容',
        placeholder:'',
        required:true, 
        labelPosition:'floating',
        rows:5,
        attributes:{
          style:'width:100%;border-radius:0px;border: 1px solid #C8C8C8;'
        },
      },      
    },
    

  ];

  onSubmit(model:any) {
    console.log(model);
    if (this.form.valid) {
      this.mailer.sendEmail(model).subscribe(data => console.log(data));
      alert('お問い合わせいただき，ありがとうございました');
      location.reload();
    }
  }
}