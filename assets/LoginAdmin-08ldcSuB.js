import{a as u}from"./axios-G2rPRu76.js";import{_ as c,c as m,a as e,e as p,f as l,v as d,o as _}from"./index-EAXiYoDf.js";var f={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_NAME:"wuyi0020",BASE_URL:"/vite-template/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:h}=f,v={data(){return{apiUrl:`${h}`,user:{username:"",password:""}}},methods:{login(){const r=`${this.apiUrl}/admin/signin`;u.post(r,this.user).then(s=>{console.log("燈入成功",s.data);const{token:a,expired:i}=s.data;document.cookie=`hexToken=${a};expires=${new Date(i)}; path=/`,this.$router.push("/admin/product")}).catch(s=>{console.log("登入失敗"+s.data.message)})}}},w=e("h2",null,"登入頁面",-1),g={class:"container"},b={class:"row justify-content-center"},x={class:"col-8"},E={class:"form-floating mb-3"},U=e("label",{for:"username"},"Email address",-1),V={class:"form-floating"},k=e("label",{for:"password"},"Password",-1),y=e("br",null,null,-1),D=e("p",{class:"mt-5 mb-3 text-muted"},"© 2024~∞ - 六角學院",-1);function R(r,s,a,i,t,n){return _(),m("div",null,[w,e("div",g,[e("div",b,[e("div",x,[e("form",{id:"form",class:"form-signin",onSubmit:s[3]||(s[3]=p((...o)=>n.login&&n.login(...o),["prevent"]))},[e("div",E,[l(e("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":s[0]||(s[0]=o=>t.user.username=o)},null,512),[[d,t.user.username]]),U]),e("div",V,[l(e("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":s[1]||(s[1]=o=>t.user.password=o)},null,512),[[d,t.user.password]]),k]),y,e("button",{type:"button",class:"btn btn-lg btn-primary w-100 mt-3",onClick:s[2]||(s[2]=o=>n.login())}," 登入 ")],32)])]),D])])}const L=c(v,[["render",R]]);export{L as default};
