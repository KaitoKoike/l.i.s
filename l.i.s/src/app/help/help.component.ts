import {Component} from '@angular/core';
import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

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

  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  form = new FormGroup({});
    
  model = {
    name:'',
    kana:'',
    postalcode:'',
    pref:'pref',
    phone_num:'xxx-xxxx-xxxx',
    email:'',
    help_content:'text'
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
      key:'postal_code',
      wrappers:['help-form'],
      type:'input',
      props:{
        key:'postal_code',
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
          {value: '01', label: '北海道'},
          {value: '02', label: '青森県'},
          {value: '03', label: '岩手県'},
          {value: '04', label: '宮城県'},
          {value: '05', label: '秋田県'},
          {value: '06', label: '山形県'},
          {value: '07', label: '福島県'},
          {value: '08', label: '茨城県'},
          {value: '09', label: '栃木県'},
          {value: '10', label: '群馬県'},
          {value: '11', label: '埼玉県'},
          {value: '12', label: '千葉県'},
          {value: '13', label: '東京都'},
          {value: '14', label: '神奈川県'},
          {value: '15', label: '新潟県'},
          {value: '16', label: '富山県'},
          {value: '17', label: '石川県'},
          {value: '18', label: '福井県'},
          {value: '19', label: '山梨県'},
          {value: '20', label: '長野県'},
          {value: '21', label: '岐阜県'},
          {value: '22', label: '静岡県'},
          {value: '23', label: '愛知県'},
          {value: '24', label: '三重県'},
          {value: '25', label: '滋賀県'},
          {value: '26', label: '京都府'},
          {value: '27', label: '大阪府'},
          {value: '28', label: '兵庫県'},
          {value: '29', label: '奈良県'},
          {value: '30', label: '和歌山県'},
          {value: '31', label: '鳥取県'},
          {value: '32', label: '島根県'},
          {value: '33', label: '岡山県'},
          {value: '34', label: '広島県'},
          {value: '35', label: '山口県'},
          {value: '36', label: '徳島県'},
          {value: '37', label: '香川県'},
          {value: '38', label: '愛媛県'},
          {value: '39', label: '高知県'},
          {value: '40', label: '福岡県'},
          {value: '41', label: '佐賀県'},
          {value: '42', label: '長崎県'},
          {value: '43', label: '熊本県'},
          {value: '44', label: '大分県'},
          {value: '45', label: '宮崎県'},
          {value: '46', label: '鹿児島県'},
          {value: '47', label: '沖縄県'}
          ],
        required:false,        
        labelPosition:'floating',
        attributes:{
          style:"width:100%;max-width:327px;height:38px;border-radius:0px;border: 1px solid #C8C8C8;"
        },
      },
    },
    {
      key:'adress',
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
      key:'phonenumber',
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
      key:'content',
      wrappers:['help-form'],
      type:'textarea',
      props:{
        key:'content',
        type:'text',
        label:'お問い合わせ内容',
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
      alert('お問い合わせいただき，ありがとうございました');
      location.reload();
    }
  }

}