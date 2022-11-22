import{S as Ni,i as Qi,s as Ci,X as Ho,w as Di,x as Oi,y as ki,Y as Ui,Z as bc,f as Wi,t as Gi,z as $i,_ as xc,k as a,q as n,a as s,l as t,m as r,r as i,h as l,c as o,n as p,b as g,G as e,B as Fi}from"../../../../../../chunks/index-a37d17cb.js";import{M as Bi}from"../../../../../../chunks/MarkdownLayout-04a27b46.js";function Vi(me){let h,q,w,P,y,L,M,qt,Ma,ge,wt,Ia,b,Pt,Ra,I,Al,Mt,It,Nl,Rt,Ta,f,x,Ql,Tt,Ht,he,Ac='<code class="language-mysql">    show databases;</code>',bt,S,Cl,xt,St,ye,Nc='<code class="language-mysql">    use dbplayground;</code>',At,A,Dl,Nt,Qt,Le,Qc='<code class="language-mysql">    show tables;</code>',Ct,N,Ol,Dt,Ot,qe,Cc='<code class="language-mysql">    show table status;</code>',kt,Q,kl,Ut,Wt,we,Dc=`<code class="language-mysql">    describe train; 
    desc train;</code>`,Gt,Ul,Wl,$t,Ft,C,Gl,Bt,Vt,Pe,Oc='<code class="language-mysql">    select name, sex, age from train where age &gt; 22;</code>',Kt,D,$l,jt,zt,Me,kc=`<code class="language-mysql">select * from train;
select name,age,sex,pclass from train;</code>`,Yt,O,Fl,Xt,Zt,Ie,Uc=`<code class="language-mysql">    SELECT name, sex, age, pclass FROM train WHERE age &gt; 22 AND pclass = 1
    AND sex = &#39;female&#39;;</code>`,Jt,k,Bl,er,lr,Re,Wc='<code class="language-mysql">    SELECT name, sex FROM train WHERE age BETWEEN 30 AND 50;</code>',ar,U,Vl,tr,rr,Te,Gc='<code class="language-mysql">    SELECT name, sex, age, pclass FROM train WHERE sex IN (&#39;female&#39;) AND pclass = 1;</code>',sr,Kl,jl,or,cr,W,zl,nr,ir,He,$c=`<code class="language-mysql">    SELECT name, sex, age, pclass FROM train WHERE name LIKE &#39;%Am%&#39;;
    SELECT name, sex, age FROM train WHERE name LIKE &#39;% _enr_&#39;;</code>`,pr,G,Yl,dr,ur,be,Fc='<code class="language-mysql">    select name, sex, age, pclass from train where age &gt; any ( select age from train where pclass=1);</code>',fr,$,Xl,_r,vr,xe,Bc=`<code class="language-mysql">    select name, sex, age, pclass from train order by age desc; 
&#96;&#96;&#96;
</code>`,Er,F,Zl,mr,gr,Se,Vc='<code class="language-mysql">    select distinct age from train order by agetrain;</code>',Ha,R,Jl,hr,yr,ea,Lr,ba,B,Kc=`<code class="language-mysql">AVG() \uD3C9\uADE0, MIN(), MAX()
COUNT() \uD589ROW\uC758 \uAC1C\uC218, COUNT(DISTINCT) \uC911\uBCF5 \uC81C\uC678\uB41C \uD589\uC758 \uAC1C\uC218
STDEV() \uD45C\uC900 \uD3B8\uCC28, VARIANCE() \uBD84\uC0B0
\uBCC4\uCE6DALIAS \uC0AC\uC6A9\uAC00\uB2A5</code>`,xa,V,jc=`<code class="language-mysql">    select pclass, avg(fare) as &#39;\uC694\uAE08&#39; from train group by pclass order by pclass;
    select avg(fare) from train;
    select avg(age) from train;
&#96;&#96;&#96;

- where\uC640 \uBE44\uC2B7\uD55C \uAC1C\uB150. \uC9D1\uACC4\uD568\uC218 \uC870\uAC74\uC124\uC815. \uBC18\uB4DC\uC2DC Group by \uC808 \uB2E4\uC74C\uC5D0 \uC0AC\uC6A9.
&#96;&#96;&#96;mysql
    select name, max(fare) from train group by name having max(fare) &gt; 100;
&#96;&#96;&#96;

- Rollup \uCD1D\uD569, \uC911\uAC04\uD569\uACC4\uAC00 \uD544\uC694\uD560 \uACBD\uC6B0 Group by \uC808\uACFC \uD568\uAED8 with rollup \uC0AC\uC6A9.
- name \uAC12 \uC911\uBCF5\uB420 \uB54C \uD569\uACC4
select embarked,pclass, sex, SUM(fare) from train group by embarked,pclass,sex with rollup;

- join : \uC5EC\uB7EC\uAC1C \uD14C\uC774\uBE14\uC5D0\uC11C \uAC00\uC838\uC628 \uB808\uCF54\uB4DC\uB97C \uC870\uD569\uD558\uC5EC \uD558\uB098\uC758 \uD14C\uC774\uBE14\uB85C \uD45C\uD604.
- lab

&#96;&#96;&#96;mysql</code>`,Sa,T,Ae,qr,Aa,_,Ne,wr,Qe,zc='<code class="language-mysql">select length(&#39;sdfsdgds&#39;);</code>',Pr,Ce,Mr,De,Yc='<code class="language-mysql">select concat(&#39;My&#39;, &#39;sql Op&#39;, &#39;en Sourece&#39;),concat(&#39;MySQL&#39;, NULL, &#39;OpenSource&#39;);</code>',Ir,Oe,Rr,ke,Xc=`<code class="language-mysql">select locate(&#39;abc&#39;, &#39;advdgefdwtabcdfwfds&#39;);
select locate(&#39;abc&#39;, &#39;safdswf abcsfdsf&#39;);
&#96;&#96;&#96;</code>`,Tr,Ue,Hr,We,Zc=`<code class="language-mysql">select left(&#39;MySQL is an open source relational database management system&#39;, 4);
select left(&#39;MySQL is an open source relational database management system&#39;, 4),
right(&#39;MySQL is an open source relational database management system&#39;, 4);</code>`,br,Ge,xr,$e,Jc=`<code class="language-mysql">select lower(&#39;MySQL is an open source relational database management system&#39; ),
upper(&#39;MySQL is an open source relational database management system&#39;);</code>`,Sr,Fe,Ar,Be,en=`<code class="language-mysql">select replace(&#39;mssql&#39;,&#39;ms&#39;,&#39;my&#39;);
select replace(&#39;MsSQL&#39;,&#39;ms&#39;,&#39;my&#39;);</code>`,Nr,Ve,Qr,Ke,ln=`<code class="language-mysql">select trim(&#39;           MySQL   &#39;),
trim(leading &#39;-&#39; from &#39;### MySQL##&#39;),
trim(trailing &#39;-&#39; from &#39;###MySQL##&#39;);</code>`,Cr,je,Dr,ze,an='<code class="language-mysql">select format(123123123123123.123123123, 3);</code>',Or,Ye,kr,Xe,tn='<code class="language-mysql">select floor(5.5), ceil(5.5), round(5.5);</code>',Ur,Ze,Wr,Je,rn='<code class="language-mysql">select sqrt(4), pow(2,3), exp(3), log(3);</code>',Gr,el,$r,ll,sn='<code class="language-mysql">select sin(pi()/2), cos(pi()), tan(pi()/4);</code>',Fr,al,Br,tl,on='<code class="language-mysql">select abs(-3), rand(), round(rand()*100,0);</code>',Vr,rl,Kr,sl,cn=`<code class="language-mysql">select now(), curdate(), curtime();
select now(), date(now()),month(now()), day(now()), hour(now()), minute(now()), second(now());
select now(), monthname(now()), dayname(now());
select now(), dayofweek(now()), dayofmonth(now()), dayofyear(now());</code>`,jr,ol,zr,cl,nn='<code class="language-mysql">select date_format(now(), &#39;%d %y %a %d %m %n %j&#39;);</code>',Na,H,nl,Yr,Qa,d,K,la,Xr,Zr,il,pn='<code class="language-mysql">create table train2 as select * from train;</code>',Jr,j,aa,es,ls,pl,dn=`<code class="language-mysql">create database dir;
use dir;</code>`,as,z,ta,ts,rs,dl,un=`<code class="language-mysql">create table train3 (
    id int not null primary key,
    col1 int null,
    col2 float null,
    col3 varchar(45) null
);

desc train3;
select * from train3;</code>`,ss,Y,ra,os,cs,ul,fn='<code class="language-mysql">alter table train3 modify col1 varchar(20) null;</code>',ns,X,sa,is,ps,fl,_n='<code class="language-mysql">alter table train3 drop col3;</code>',ds,Z,oa,us,fs,_l,vn='<code class="language-mysql">create index col3idx on train3(col3);</code>',_s,J,ca,vs,Es,vl,En=`<code class="language-mysql">show index from train3;
desc train3;</code>`,ms,ee,na,gs,hs,El,mn=`<code class="language-mysql">create unique index col3idx on train3(col3);
show index from train3;</code>`,ys,le,ia,Ls,qs,ml,gn='<code class="language-mysql">alter table train3 add (col4 float null);</code>',ws,ae,pa,Ps,Ms,gl,hn='<code class="language-mysql">alter table train3 add col0 varchar(40) first;</code>',Is,te,da,Rs,Ts,hl,yn='<code class="language-mysql">alter table train3 add col5 char(30) after col4;</code>',Hs,re,ua,bs,xs,yl,Ln=`<code class="language-mysql">alter table train3 change col0 colnum int;
desc train3;
show index from train3;</code>`,Ss,se,fa,As,Ns,Ll,qn='<code class="language-mysql">Alter table train3 add fulltext col6idx(col6);</code>',Qs,oe,_a,Cs,Ds,ql,wn=`<code class="language-mysql">alter table train3 drop index col3idx;
drop index col2idx on train3;</code>`,Os,ce,va,ks,Us,wl,Pn=`<code class="language-mysql">create view testview as select col1, col2 from train3; 
select * from testview;</code>`,Ws,ne,Ea,Gs,$s,Pl,Mn=`<code class="language-mysql">alter view testview as select col1, col2, col3 from train3;
select * from testview;</code>`,Fs,ie,ma,Bs,Vs,Ml,In='<code class="language-mysql">drop view testview;</code>',Ks,pe,ga,js,zs,Il,Rn=`<code class="language-mysql">insert into train3 value(1,3,4,5,6,6,&#39;test&#39;);
select * from train3;</code>`,Ys,de,ha,Xs,Zs,Rl,Tn=`<code class="language-mysql">insert into train3 select * from train4;
select * from train3;</code>`,Js,ue,ya,eo,lo,Tl,Hn='<code class="language-mysql">update train3 set col1=1, col2=7.0 where id=1;</code>',ao,fe,La,to,ro,Hl,bn='<code class="language-mysql">delete from train3 where id=1;</code>',so,_e,qa,oo,co,bl,xn='<code class="language-mysql">truncate table train3;</code>',no,ve,wa,io,po,xl,Sn='<code class="language-mysql">drop table train3;</code>',uo,Ee,Pa,fo,_o,Sl,An='<code class="language-mysql">drop database soso;</code>';return{c(){h=a("p"),q=n("\uD638\uC2A4\uD305 \uC11C\uBC84\uC5D0 \uC811\uC18D\uD574\uC11C \uD130\uBBF8\uB110\uB85C MySQL \uC2A4\uD0A4\uB9C8\uB85C \uC811\uC18D\uD558\uAC70\uB098 MySQL Workbench\uC0AC\uC6A9"),w=s(),P=a("p"),y=n("\uACB0\uACFC\uC801\uC73C\uB85C\uB294 \uBB58 \uC368\uB3C4 \uAC19\uB2E4."),L=s(),M=a("p"),qt=n("CSV \uB370\uC774\uD130\uB97C \uC9C1\uC811 \uB85C\uCEEC\uC5D0\uC11C \uB123\uAE30\uB54C\uBB38\uC5D0 \uCFFC\uB9AC\uBB38 \uC791\uC131\uC5D0 \uC2DC\uAC04\uC774 \uC880 \uB354 \uAC78\uB9B4 \uC218\uB3C4??"),Ma=s(),ge=a("p"),wt=n("\uAC80\uC740 \uD654\uBA74\uBCF4\uB294\uAC8C \uC7AC\uBBF8\uC788\uAE34\uD55C\uB370 \uD6A8\uC728\uC744 \uB530\uC9C0\uC790\uBA74 \uC6CC\uD06C\uBC34\uCE58\uAC00 \uC57D\uAC04 \uC55E\uC11C\uB294\uAC83 \uAC19\uB2E4."),Ia=s(),b=a("h2"),Pt=n("MySQL Workbench"),Ra=s(),I=a("ul"),Al=a("li"),Mt=n("\uD30C\uC77C \uC778\uCF54\uB529 \uD655\uC778\uD560 \uAC83."),It=s(),Nl=a("li"),Rt=n("DB \uC811\uC18D\uD6C4 Table data import Wizard\uB85C \uB370\uC774\uD130 \uC8FC\uC785."),Ta=s(),f=a("ul"),x=a("li"),Ql=a("p"),Tt=n("\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBCF4\uAE30"),Ht=s(),he=a("pre"),bt=s(),S=a("li"),Cl=a("p"),xt=n("\uD2B9\uC815 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0AC\uC6A9"),St=s(),ye=a("pre"),At=s(),A=a("li"),Dl=a("p"),Nt=n("\uD14C\uC774\uBE14 \uBCF4\uAE30"),Qt=s(),Le=a("pre"),Ct=s(),N=a("li"),Ol=a("p"),Dt=n("\uD14C\uC774\uBE14 \uC2A4\uD14C\uC774\uD130\uC2A4 \uBCF4\uAE30"),Ot=s(),qe=a("pre"),kt=s(),Q=a("li"),kl=a("p"),Ut=n("\uD14C\uC774\uBE14\uC815\uBCF4 \uBCF4\uAE30"),Wt=s(),we=a("pre"),Gt=s(),Ul=a("li"),Wl=a("p"),$t=n("\uAE30\uBCF8\uC801\uC778 where"),Ft=s(),C=a("li"),Gl=a("p"),Bt=n("select \uD544\uB4DC\uBA85 from \uD14C\uC774\uBE14\uBA85 where \uC870\uAC74\uC2DD;"),Vt=s(),Pe=a("pre"),Kt=s(),D=a("li"),$l=a("p"),jt=n("\uD2B9\uC815 \uCE7C\uB7FC \uC120\uD0DD \uD639\uC740 \uBAA8\uB450 \uC120\uD0DD"),zt=s(),Me=a("pre"),Yt=s(),O=a("li"),Fl=a("p"),Xt=n("\uC774\uB984, \uC131\uBCC4, \uB098\uC774, \uC2B9\uC120\uB4F1\uAE09 \uCE7C\uB7FC\uB9CC \uBCF4\uC774\uACE0 \uB098\uC774\uAC00 22\uC138\uC774\uC0C1, 1\uB4F1\uAE09\uC774\uC0C1, \uC5EC\uC131\uC778 \uB370\uC774\uD130 \uCD9C\uB825"),Zt=s(),Ie=a("pre"),Jt=s(),k=a("li"),Bl=a("p"),er=n("between\uC740  10~300 \uCC98\uB7FC \uBC94\uC704 \uAC12\uC744 \uC9C0\uC815, \uBCF4\uC5EC\uC8FC\uB294 \uD14C\uC774\uBE14\uC5D0 \uC870\uD68C\uAC12\uCE7C\uB7FC\uC774 \uC5C6\uC5B4\uB3C4 \uAC00\uB2A5\uD558\uB2E4."),lr=s(),Re=a("pre"),ar=s(),U=a("li"),Vl=a("p"),tr=n("\uC774\uC0B0\uAC12(Discrete) \uC870\uAC74\uC5D0\uC11C IN \uC0AC\uC6A9"),rr=s(),Te=a("pre"),sr=s(),Kl=a("li"),jl=a("p"),or=n("LIKE \uBB38\uC790\uC5F4\uB0B4\uC6A9 \uAC80\uC0C9"),cr=s(),W=a("li"),zl=a("p"),nr=n("\uBB38\uC790\uB4A4\uC5D0 %\uB97C \uC4F0\uBA74 \uBB34\uC5C7\uC774\uB4E0 \uD5C8\uC6A9, \uD55C\uAE00\uC790\uB294 _ \uC5B8\uB354\uBC14 \uC0AC\uC6A9."),ir=s(),He=a("pre"),pr=s(),G=a("li"),Yl=a("p"),dr=n("sub query"),ur=s(),be=a("pre"),fr=s(),$=a("li"),Xl=a("p"),_r=n(`order by \uACB0\uACFC \uCD9C\uB825\uC21C\uC11C\uB97C \uC624\uB984\uCC28\uC21C, \uB0B4\uB9BC\uCC28\uC21C\uC73C\uB85C \uD560 \uC218 \uC788\uB2E4.
\u2013 \uAE30\uBCF8\uAC12\uC740 \uC624\uB984\uCC28\uC21Cascending asc\uB294 \uC0DD\uB7B5\uAC00\uB2A5, \uB0B4\uB9BC\uCC28\uC21C\uC740 descending \uC5F4 \uC774\uB984\uB4A4\uC5D0 desc\uB97C \uC801\uC744 \uAC83.`),vr=s(),xe=a("pre"),Er=s(),F=a("li"),Zl=a("p"),mr=n("distinct  \uC911\uBCF5\uB418\uB294\uAC83\uB4E4\uC740 \uD558\uB098\uB9CC \uCD9C\uB825"),gr=s(),Se=a("pre"),Ha=s(),R=a("ul"),Jl=a("li"),hr=n("GROUP BY \uADF8\uB8F9\uC73C\uB85C \uBB36\uC5B4\uC900\uB2E4."),yr=s(),ea=a("li"),Lr=n("\uC9D1\uACC4 \uD568\uC218 AGGREGATE FUNCTION \uC744 \uD568\uAED8 \uC0AC\uC6A9."),ba=s(),B=a("pre"),xa=s(),V=a("pre"),Sa=s(),T=a("h2"),Ae=a("a"),qr=n("\uB0B4\uC7A5\uD568\uC218"),Aa=s(),_=a("ul"),Ne=a("li"),wr=n("\uBB38\uC790\uC5F4 \uAE38\uC774 \uBC18\uD658"),Qe=a("pre"),Pr=s(),Ce=a("li"),Mr=n("\uBB38\uC790\uC5F4 \uBAA8\uB450 \uACB0\uD569. \uC804\uB2EC\uBC1B\uC740 \uBB38\uC790\uC5F4 \uC911 \uD558\uB098\uB77C\uB3C4 null\uC774 \uC788\uC73C\uBA74 null \uBC18\uD658."),De=a("pre"),Ir=s(),Oe=a("li"),Rr=n(`\uBB38\uC790\uC5F4 \uB0B4\uC5D0\uC11C \uCC3E\uB294 \uBB38\uC790\uC5F4\uC774 \uCC98\uC74C\uC73C\uB85C \uB098\uD0C0\uB098\uB294 \uC704\uCE58\uB97C \uCC3E\uC544\uC11C \uD574\uB2F9 \uC704\uCE58\uB97C \uBC18\uD658
-# index \uBC88\uD638\uAC00 1\uBD80\uD130 \uC2DC\uC791\uD55C\uB2E4. (0\uBD80\uD130 \uC2DC\uC791\uD558\uC9C0 \uC54A\uB294\uB2E4.), \uACF5\uBC31\uD3EC\uD568, `),ke=a("pre"),Tr=s(),Ue=a("li"),Hr=n("\uC67C\uCABD, \uC624\uB978\uCABD \uBC29\uD5A5\uC5D0\uC11C \uC9C0\uC815\uD55C \uAC1C\uC218\uB9CC\uD07C \uBB38\uC790\uC5F4 \uBC18\uD658"),We=a("pre"),br=s(),Ge=a("li"),xr=n("\uB300\uC18C\uBB38\uC790\uB85C \uC77C\uAD04\uBCC0\uACBD"),$e=a("pre"),Sr=s(),Fe=a("li"),Ar=n("\uBB38\uC790\uC5F4\uC5D0\uC11C \uD2B9\uC815 \uBB38\uC790\uC5F4\uC744 \uB300\uCCB4 \uBB38\uC790\uC5F4\uB85C \uAD50\uCCB4, \uB300\uC18C\uBB38\uC790 \uAD6C\uBB38\uD568."),Be=a("pre"),Nr=s(),Ve=a("li"),Qr=n("\uBB38\uC790\uC5F4 \uC55E\uB4A4, \uC591\uCABD \uBAA8\uB450\uC758 \uD2B9\uC815\uBB38\uC790\uC81C\uAC70"),Ke=a("pre"),Cr=s(),je=a("li"),Dr=n("\uC22B\uC790\uD0D1\uC785 \uB370\uC774\uD130\uB97C 3\uBC88\uC9F8\uC790\uB9AC\uB9C8\uB2E4 \uC27C\uD45C. \uB2E8, \uBC18\uD658\uB420\uB54C\uB294 \uBB38\uC790\uC5F4\uB85C \uBC18\uD658. \uB450\uBC88 \uC9F8 \uC778\uC218\uB294 \uC18C\uC218\uC810 \uC790\uB9BF\uC218"),ze=a("pre"),Or=s(),Ye=a("li"),kr=n("\uB0B4\uB9BC, \uC62C\uB9BC, \uBC18\uC62C\uB9BC."),Xe=a("pre"),Ur=s(),Ze=a("li"),Wr=n("\uC591\uC758 \uC81C\uACF1\uADFC. (\uBC11\uC218,\uC778\uC218)\uAC70\uB4ED\uC81C\uACF1. \uC778\uC218\uC9C0\uC218\uAC70\uB4ED\uC81C\uACF1. \uC790\uC5F0\uB85C\uADF8."),Je=a("pre"),Gr=s(),el=a("li"),$r=n("\uC0BC\uAC01\uD568\uC218. \uC0AC\uC778. \uCF54\uC0AC\uC778. \uD0C4\uC820\uD2B8."),ll=a("pre"),Fr=s(),al=a("li"),Br=n("\uC808\uB300\uAC12 \uBC18\uD658. 0.0\uBCF4\uB2E4 \uD06C\uAC70\uB098 \uAC19\uACE0 1.0\uBCF4\uB2E4 \uC791\uC740 \uD558\uB098\uC758 \uC2E4\uC218 \uBB34\uC791\uC704 \uC0DD\uC131."),tl=a("pre"),Vr=s(),rl=a("li"),Kr=n("\uB0A0\uC9DC \uC138\uACC4\uD45C\uC900\uC2DC\uAE30\uC900 . \uD604\uC7AC\uC2DC\uAC04, \uD604\uC7AC\uB0A0\uC9DC, \uD604\uC7AC\uC2DC\uAC01;"),sl=a("pre"),jr=s(),ol=a("li"),zr=n("\uC804\uB2EC\uD615\uC2DD\uC5D0 \uB9DE\uAC8C \uB0A0\uC9DC,\uC2DC\uAC04\uC815\uBCF4\uB97C \uBB38\uC790\uC5F4\uB85C \uBC18\uD658"),cl=a("pre"),Na=s(),H=a("h2"),nl=a("a"),Yr=n("DDL"),Qa=s(),d=a("ul"),K=a("li"),la=a("p"),Xr=n("train \uD14C\uC774\uBE14\uADF8\uB300\uB85C \uBCF5\uC0AC\uD574\uC11C train2\uB77C\uB294 \uD14C\uC774\uBE14\uBA85\uC758 \uD14C\uC774\uBE14 \uC0DD\uC131"),Zr=s(),il=a("pre"),Jr=s(),j=a("li"),aa=a("p"),es=n("\uC0C8\uB85C\uC6B4 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0DD\uC131"),ls=s(),pl=a("pre"),as=s(),z=a("li"),ta=a("p"),ts=n("\uD14C\uC774\uBE14 \uC218\uB3D9\uC0DD\uC131"),rs=s(),dl=a("pre"),ss=s(),Y=a("li"),ra=a("p"),os=n("\uD14C\uC774\uBE14 \uCEEC\uB7FC \uD0C0\uC785 \uBCC0\uACBD"),cs=s(),ul=a("pre"),ns=s(),X=a("li"),sa=a("p"),is=n("\uD14C\uC774\uBE14 \uCE7C\uB7FC \uC0AD\uC81C"),ps=s(),fl=a("pre"),ds=s(),Z=a("li"),oa=a("p"),us=n("\uC778\uB371\uC2A4 \uC0DD\uC131. \uC218\uC815\uBCF4\uB2E4 \uAC80\uC0C9\uC774 \uC790\uC8FC \uC0AC\uC6A9\uB418\uB294 \uD14C\uC774\uBE14\uC5D0\uC11C \uC0AC\uC6A9."),fs=s(),_l=a("pre"),_s=s(),J=a("li"),ca=a("p"),vs=n("\uC778\uB371\uC2A4 \uC0DD\uC131 \uD655\uC778."),Es=s(),vl=a("pre"),ms=s(),ee=a("li"),na=a("p"),gs=n("\uC911\uBCF5\uAC12\uC744 \uD5C8\uC6A9\uD558\uC9C0 \uC54A\uB294 \uC778\uB371\uC2A4unique index \uC0DD\uC131."),hs=s(),El=a("pre"),ys=s(),le=a("li"),ia=a("p"),Ls=n("\uD6C4\uB2E8 \uCE7C\uB7FC \uB4A4\uC5D0 \uCE7C\uB7FC \uCD94\uAC00"),qs=s(),ml=a("pre"),ws=s(),ae=a("li"),pa=a("p"),Ps=n("\uC120\uB2E8 \uCE7C\uB7FC \uC55E\uC5D0 \uCE7C\uB7FC \uCD94\uAC00"),Ms=s(),gl=a("pre"),Is=s(),te=a("li"),da=a("p"),Rs=n("\uC9C0\uC815 \uCE7C\uB7FC \uB4A4\uC5D0 \uCE7C\uB7FC \uCD94\uAC00"),Ts=s(),hl=a("pre"),Hs=s(),re=a("li"),ua=a("p"),bs=n("\uCE7C\uB7FC\uBA85 \uBCC0\uACBD"),xs=s(),yl=a("pre"),Ss=s(),se=a("li"),fa=a("p"),As=n("\uC77C\uBC18\uC801 \uC778\uB371\uC2A4\uC640 \uB2E4\uB974\uAC8C \uB9E4\uC6B0 \uBE60\uB974\uAC8C \uD14C\uC774\uBE14\uC758 \uBAA8\uB4E0 \uD14D\uC2A4\uD2B8\uCEEC\uB7FC \uAC80\uC0C9"),Ns=s(),Ll=a("pre"),Qs=s(),oe=a("li"),_a=a("p"),Cs=n("index \uC0AD\uC81C"),Ds=s(),ql=a("pre"),Os=s(),ce=a("li"),va=a("p"),ks=n("view"),Us=s(),wl=a("pre"),Ws=s(),ne=a("li"),Ea=a("p"),Gs=n("view \uCD94\uAC00"),$s=s(),Pl=a("pre"),Fs=s(),ie=a("li"),ma=a("p"),Bs=n("view \uC0AD\uC81C"),Vs=s(),Ml=a("pre"),Ks=s(),pe=a("li"),ga=a("p"),js=n("\uB370\uC774\uD130 \uC0BD\uC785"),zs=s(),Il=a("pre"),Ys=s(),de=a("li"),ha=a("p"),Xs=n("train4\uD14C\uC774\uBE14 \uB370\uC774\uD130\uB97C train3\uD14C\uC774\uBE14\uB85C \uC804\uCCB4 \uBCF5\uC0AC"),Zs=s(),Rl=a("pre"),Js=s(),ue=a("li"),ya=a("p"),eo=n("\uAE30\uC874\uAC12 \uBCC0\uACBD"),lo=s(),Tl=a("pre"),ao=s(),fe=a("li"),La=a("p"),to=n("\uC0AD\uC81C delete \uBCF5\uAD6C \uAC00\uB2A5."),ro=s(),Hl=a("pre"),so=s(),_e=a("li"),qa=a("p"),oo=n("\uC0AD\uC81C truncate \uC0AD\uC81C\uC2DC \uBCF5\uAD6C \uBD88\uAC00."),co=s(),bl=a("pre"),no=s(),ve=a("li"),wa=a("p"),io=n("\uD14C\uC774\uBE14 \uC0AD\uC81C"),po=s(),xl=a("pre"),uo=s(),Ee=a("li"),Pa=a("p"),fo=n("\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0AD\uC81C"),_o=s(),Sl=a("pre"),this.h()},l(c){h=t(c,"P",{});var E=r(h);q=i(E,"\uD638\uC2A4\uD305 \uC11C\uBC84\uC5D0 \uC811\uC18D\uD574\uC11C \uD130\uBBF8\uB110\uB85C MySQL \uC2A4\uD0A4\uB9C8\uB85C \uC811\uC18D\uD558\uAC70\uB098 MySQL Workbench\uC0AC\uC6A9"),E.forEach(l),w=o(c),P=t(c,"P",{});var bo=r(P);y=i(bo,"\uACB0\uACFC\uC801\uC73C\uB85C\uB294 \uBB58 \uC368\uB3C4 \uAC19\uB2E4."),bo.forEach(l),L=o(c),M=t(c,"P",{});var xo=r(M);qt=i(xo,"CSV \uB370\uC774\uD130\uB97C \uC9C1\uC811 \uB85C\uCEEC\uC5D0\uC11C \uB123\uAE30\uB54C\uBB38\uC5D0 \uCFFC\uB9AC\uBB38 \uC791\uC131\uC5D0 \uC2DC\uAC04\uC774 \uC880 \uB354 \uAC78\uB9B4 \uC218\uB3C4??"),xo.forEach(l),Ma=o(c),ge=t(c,"P",{});var So=r(ge);wt=i(So,"\uAC80\uC740 \uD654\uBA74\uBCF4\uB294\uAC8C \uC7AC\uBBF8\uC788\uAE34\uD55C\uB370 \uD6A8\uC728\uC744 \uB530\uC9C0\uC790\uBA74 \uC6CC\uD06C\uBC34\uCE58\uAC00 \uC57D\uAC04 \uC55E\uC11C\uB294\uAC83 \uAC19\uB2E4."),So.forEach(l),Ia=o(c),b=t(c,"H2",{class:!0});var Ao=r(b);Pt=i(Ao,"MySQL Workbench"),Ao.forEach(l),Ra=o(c),I=t(c,"UL",{});var Ca=r(I);Al=t(Ca,"LI",{});var No=r(Al);Mt=i(No,"\uD30C\uC77C \uC778\uCF54\uB529 \uD655\uC778\uD560 \uAC83."),No.forEach(l),It=o(Ca),Nl=t(Ca,"LI",{});var Qo=r(Nl);Rt=i(Qo,"DB \uC811\uC18D\uD6C4 Table data import Wizard\uB85C \uB370\uC774\uD130 \uC8FC\uC785."),Qo.forEach(l),Ca.forEach(l),Ta=o(c),f=t(c,"UL",{});var v=r(f);x=t(v,"LI",{});var Da=r(x);Ql=t(Da,"P",{});var Co=r(Ql);Tt=i(Co,"\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBCF4\uAE30"),Co.forEach(l),Ht=o(Da),he=t(Da,"PRE",{class:!0});var Nn=r(he);Nn.forEach(l),Da.forEach(l),bt=o(v),S=t(v,"LI",{});var Oa=r(S);Cl=t(Oa,"P",{});var Do=r(Cl);xt=i(Do,"\uD2B9\uC815 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0AC\uC6A9"),Do.forEach(l),St=o(Oa),ye=t(Oa,"PRE",{class:!0});var Qn=r(ye);Qn.forEach(l),Oa.forEach(l),At=o(v),A=t(v,"LI",{});var ka=r(A);Dl=t(ka,"P",{});var Oo=r(Dl);Nt=i(Oo,"\uD14C\uC774\uBE14 \uBCF4\uAE30"),Oo.forEach(l),Qt=o(ka),Le=t(ka,"PRE",{class:!0});var Cn=r(Le);Cn.forEach(l),ka.forEach(l),Ct=o(v),N=t(v,"LI",{});var Ua=r(N);Ol=t(Ua,"P",{});var ko=r(Ol);Dt=i(ko,"\uD14C\uC774\uBE14 \uC2A4\uD14C\uC774\uD130\uC2A4 \uBCF4\uAE30"),ko.forEach(l),Ot=o(Ua),qe=t(Ua,"PRE",{class:!0});var Dn=r(qe);Dn.forEach(l),Ua.forEach(l),kt=o(v),Q=t(v,"LI",{});var Wa=r(Q);kl=t(Wa,"P",{});var Uo=r(kl);Ut=i(Uo,"\uD14C\uC774\uBE14\uC815\uBCF4 \uBCF4\uAE30"),Uo.forEach(l),Wt=o(Wa),we=t(Wa,"PRE",{class:!0});var On=r(we);On.forEach(l),Wa.forEach(l),Gt=o(v),Ul=t(v,"LI",{});var Wo=r(Ul);Wl=t(Wo,"P",{});var Go=r(Wl);$t=i(Go,"\uAE30\uBCF8\uC801\uC778 where"),Go.forEach(l),Wo.forEach(l),Ft=o(v),C=t(v,"LI",{});var Ga=r(C);Gl=t(Ga,"P",{});var $o=r(Gl);Bt=i($o,"select \uD544\uB4DC\uBA85 from \uD14C\uC774\uBE14\uBA85 where \uC870\uAC74\uC2DD;"),$o.forEach(l),Vt=o(Ga),Pe=t(Ga,"PRE",{class:!0});var kn=r(Pe);kn.forEach(l),Ga.forEach(l),Kt=o(v),D=t(v,"LI",{});var $a=r(D);$l=t($a,"P",{});var Fo=r($l);jt=i(Fo,"\uD2B9\uC815 \uCE7C\uB7FC \uC120\uD0DD \uD639\uC740 \uBAA8\uB450 \uC120\uD0DD"),Fo.forEach(l),zt=o($a),Me=t($a,"PRE",{class:!0});var Un=r(Me);Un.forEach(l),$a.forEach(l),Yt=o(v),O=t(v,"LI",{});var Fa=r(O);Fl=t(Fa,"P",{});var Bo=r(Fl);Xt=i(Bo,"\uC774\uB984, \uC131\uBCC4, \uB098\uC774, \uC2B9\uC120\uB4F1\uAE09 \uCE7C\uB7FC\uB9CC \uBCF4\uC774\uACE0 \uB098\uC774\uAC00 22\uC138\uC774\uC0C1, 1\uB4F1\uAE09\uC774\uC0C1, \uC5EC\uC131\uC778 \uB370\uC774\uD130 \uCD9C\uB825"),Bo.forEach(l),Zt=o(Fa),Ie=t(Fa,"PRE",{class:!0});var Wn=r(Ie);Wn.forEach(l),Fa.forEach(l),Jt=o(v),k=t(v,"LI",{});var Ba=r(k);Bl=t(Ba,"P",{});var Vo=r(Bl);er=i(Vo,"between\uC740  10~300 \uCC98\uB7FC \uBC94\uC704 \uAC12\uC744 \uC9C0\uC815, \uBCF4\uC5EC\uC8FC\uB294 \uD14C\uC774\uBE14\uC5D0 \uC870\uD68C\uAC12\uCE7C\uB7FC\uC774 \uC5C6\uC5B4\uB3C4 \uAC00\uB2A5\uD558\uB2E4."),Vo.forEach(l),lr=o(Ba),Re=t(Ba,"PRE",{class:!0});var Gn=r(Re);Gn.forEach(l),Ba.forEach(l),ar=o(v),U=t(v,"LI",{});var Va=r(U);Vl=t(Va,"P",{});var Ko=r(Vl);tr=i(Ko,"\uC774\uC0B0\uAC12(Discrete) \uC870\uAC74\uC5D0\uC11C IN \uC0AC\uC6A9"),Ko.forEach(l),rr=o(Va),Te=t(Va,"PRE",{class:!0});var $n=r(Te);$n.forEach(l),Va.forEach(l),sr=o(v),Kl=t(v,"LI",{});var jo=r(Kl);jl=t(jo,"P",{});var zo=r(jl);or=i(zo,"LIKE \uBB38\uC790\uC5F4\uB0B4\uC6A9 \uAC80\uC0C9"),zo.forEach(l),jo.forEach(l),cr=o(v),W=t(v,"LI",{});var Ka=r(W);zl=t(Ka,"P",{});var Yo=r(zl);nr=i(Yo,"\uBB38\uC790\uB4A4\uC5D0 %\uB97C \uC4F0\uBA74 \uBB34\uC5C7\uC774\uB4E0 \uD5C8\uC6A9, \uD55C\uAE00\uC790\uB294 _ \uC5B8\uB354\uBC14 \uC0AC\uC6A9."),Yo.forEach(l),ir=o(Ka),He=t(Ka,"PRE",{class:!0});var Fn=r(He);Fn.forEach(l),Ka.forEach(l),pr=o(v),G=t(v,"LI",{});var ja=r(G);Yl=t(ja,"P",{});var Xo=r(Yl);dr=i(Xo,"sub query"),Xo.forEach(l),ur=o(ja),be=t(ja,"PRE",{class:!0});var Bn=r(be);Bn.forEach(l),ja.forEach(l),fr=o(v),$=t(v,"LI",{});var za=r($);Xl=t(za,"P",{});var Zo=r(Xl);_r=i(Zo,`order by \uACB0\uACFC \uCD9C\uB825\uC21C\uC11C\uB97C \uC624\uB984\uCC28\uC21C, \uB0B4\uB9BC\uCC28\uC21C\uC73C\uB85C \uD560 \uC218 \uC788\uB2E4.
\u2013 \uAE30\uBCF8\uAC12\uC740 \uC624\uB984\uCC28\uC21Cascending asc\uB294 \uC0DD\uB7B5\uAC00\uB2A5, \uB0B4\uB9BC\uCC28\uC21C\uC740 descending \uC5F4 \uC774\uB984\uB4A4\uC5D0 desc\uB97C \uC801\uC744 \uAC83.`),Zo.forEach(l),vr=o(za),xe=t(za,"PRE",{class:!0});var Vn=r(xe);Vn.forEach(l),za.forEach(l),Er=o(v),F=t(v,"LI",{});var Ya=r(F);Zl=t(Ya,"P",{});var Jo=r(Zl);mr=i(Jo,"distinct  \uC911\uBCF5\uB418\uB294\uAC83\uB4E4\uC740 \uD558\uB098\uB9CC \uCD9C\uB825"),Jo.forEach(l),gr=o(Ya),Se=t(Ya,"PRE",{class:!0});var Kn=r(Se);Kn.forEach(l),Ya.forEach(l),v.forEach(l),Ha=o(c),R=t(c,"UL",{});var Xa=r(R);Jl=t(Xa,"LI",{});var ec=r(Jl);hr=i(ec,"GROUP BY \uADF8\uB8F9\uC73C\uB85C \uBB36\uC5B4\uC900\uB2E4."),ec.forEach(l),yr=o(Xa),ea=t(Xa,"LI",{});var lc=r(ea);Lr=i(lc,"\uC9D1\uACC4 \uD568\uC218 AGGREGATE FUNCTION \uC744 \uD568\uAED8 \uC0AC\uC6A9."),lc.forEach(l),Xa.forEach(l),ba=o(c),B=t(c,"PRE",{class:!0});var jn=r(B);jn.forEach(l),xa=o(c),V=t(c,"PRE",{class:!0});var zn=r(V);zn.forEach(l),Sa=o(c),T=t(c,"H2",{id:!0,class:!0});var ac=r(T);Ae=t(ac,"A",{href:!0});var tc=r(Ae);qr=i(tc,"\uB0B4\uC7A5\uD568\uC218"),tc.forEach(l),ac.forEach(l),Aa=o(c),_=t(c,"UL",{});var m=r(_);Ne=t(m,"LI",{});var vo=r(Ne);wr=i(vo,"\uBB38\uC790\uC5F4 \uAE38\uC774 \uBC18\uD658"),Qe=t(vo,"PRE",{class:!0});var Yn=r(Qe);Yn.forEach(l),vo.forEach(l),Pr=o(m),Ce=t(m,"LI",{});var Eo=r(Ce);Mr=i(Eo,"\uBB38\uC790\uC5F4 \uBAA8\uB450 \uACB0\uD569. \uC804\uB2EC\uBC1B\uC740 \uBB38\uC790\uC5F4 \uC911 \uD558\uB098\uB77C\uB3C4 null\uC774 \uC788\uC73C\uBA74 null \uBC18\uD658."),De=t(Eo,"PRE",{class:!0});var Xn=r(De);Xn.forEach(l),Eo.forEach(l),Ir=o(m),Oe=t(m,"LI",{});var mo=r(Oe);Rr=i(mo,`\uBB38\uC790\uC5F4 \uB0B4\uC5D0\uC11C \uCC3E\uB294 \uBB38\uC790\uC5F4\uC774 \uCC98\uC74C\uC73C\uB85C \uB098\uD0C0\uB098\uB294 \uC704\uCE58\uB97C \uCC3E\uC544\uC11C \uD574\uB2F9 \uC704\uCE58\uB97C \uBC18\uD658
-# index \uBC88\uD638\uAC00 1\uBD80\uD130 \uC2DC\uC791\uD55C\uB2E4. (0\uBD80\uD130 \uC2DC\uC791\uD558\uC9C0 \uC54A\uB294\uB2E4.), \uACF5\uBC31\uD3EC\uD568, `),ke=t(mo,"PRE",{class:!0});var Zn=r(ke);Zn.forEach(l),mo.forEach(l),Tr=o(m),Ue=t(m,"LI",{});var go=r(Ue);Hr=i(go,"\uC67C\uCABD, \uC624\uB978\uCABD \uBC29\uD5A5\uC5D0\uC11C \uC9C0\uC815\uD55C \uAC1C\uC218\uB9CC\uD07C \uBB38\uC790\uC5F4 \uBC18\uD658"),We=t(go,"PRE",{class:!0});var Jn=r(We);Jn.forEach(l),go.forEach(l),br=o(m),Ge=t(m,"LI",{});var ho=r(Ge);xr=i(ho,"\uB300\uC18C\uBB38\uC790\uB85C \uC77C\uAD04\uBCC0\uACBD"),$e=t(ho,"PRE",{class:!0});var ei=r($e);ei.forEach(l),ho.forEach(l),Sr=o(m),Fe=t(m,"LI",{});var yo=r(Fe);Ar=i(yo,"\uBB38\uC790\uC5F4\uC5D0\uC11C \uD2B9\uC815 \uBB38\uC790\uC5F4\uC744 \uB300\uCCB4 \uBB38\uC790\uC5F4\uB85C \uAD50\uCCB4, \uB300\uC18C\uBB38\uC790 \uAD6C\uBB38\uD568."),Be=t(yo,"PRE",{class:!0});var li=r(Be);li.forEach(l),yo.forEach(l),Nr=o(m),Ve=t(m,"LI",{});var Lo=r(Ve);Qr=i(Lo,"\uBB38\uC790\uC5F4 \uC55E\uB4A4, \uC591\uCABD \uBAA8\uB450\uC758 \uD2B9\uC815\uBB38\uC790\uC81C\uAC70"),Ke=t(Lo,"PRE",{class:!0});var ai=r(Ke);ai.forEach(l),Lo.forEach(l),Cr=o(m),je=t(m,"LI",{});var qo=r(je);Dr=i(qo,"\uC22B\uC790\uD0D1\uC785 \uB370\uC774\uD130\uB97C 3\uBC88\uC9F8\uC790\uB9AC\uB9C8\uB2E4 \uC27C\uD45C. \uB2E8, \uBC18\uD658\uB420\uB54C\uB294 \uBB38\uC790\uC5F4\uB85C \uBC18\uD658. \uB450\uBC88 \uC9F8 \uC778\uC218\uB294 \uC18C\uC218\uC810 \uC790\uB9BF\uC218"),ze=t(qo,"PRE",{class:!0});var ti=r(ze);ti.forEach(l),qo.forEach(l),Or=o(m),Ye=t(m,"LI",{});var wo=r(Ye);kr=i(wo,"\uB0B4\uB9BC, \uC62C\uB9BC, \uBC18\uC62C\uB9BC."),Xe=t(wo,"PRE",{class:!0});var ri=r(Xe);ri.forEach(l),wo.forEach(l),Ur=o(m),Ze=t(m,"LI",{});var Po=r(Ze);Wr=i(Po,"\uC591\uC758 \uC81C\uACF1\uADFC. (\uBC11\uC218,\uC778\uC218)\uAC70\uB4ED\uC81C\uACF1. \uC778\uC218\uC9C0\uC218\uAC70\uB4ED\uC81C\uACF1. \uC790\uC5F0\uB85C\uADF8."),Je=t(Po,"PRE",{class:!0});var si=r(Je);si.forEach(l),Po.forEach(l),Gr=o(m),el=t(m,"LI",{});var Mo=r(el);$r=i(Mo,"\uC0BC\uAC01\uD568\uC218. \uC0AC\uC778. \uCF54\uC0AC\uC778. \uD0C4\uC820\uD2B8."),ll=t(Mo,"PRE",{class:!0});var oi=r(ll);oi.forEach(l),Mo.forEach(l),Fr=o(m),al=t(m,"LI",{});var Io=r(al);Br=i(Io,"\uC808\uB300\uAC12 \uBC18\uD658. 0.0\uBCF4\uB2E4 \uD06C\uAC70\uB098 \uAC19\uACE0 1.0\uBCF4\uB2E4 \uC791\uC740 \uD558\uB098\uC758 \uC2E4\uC218 \uBB34\uC791\uC704 \uC0DD\uC131."),tl=t(Io,"PRE",{class:!0});var ci=r(tl);ci.forEach(l),Io.forEach(l),Vr=o(m),rl=t(m,"LI",{});var Ro=r(rl);Kr=i(Ro,"\uB0A0\uC9DC \uC138\uACC4\uD45C\uC900\uC2DC\uAE30\uC900 . \uD604\uC7AC\uC2DC\uAC04, \uD604\uC7AC\uB0A0\uC9DC, \uD604\uC7AC\uC2DC\uAC01;"),sl=t(Ro,"PRE",{class:!0});var ni=r(sl);ni.forEach(l),Ro.forEach(l),jr=o(m),ol=t(m,"LI",{});var To=r(ol);zr=i(To,"\uC804\uB2EC\uD615\uC2DD\uC5D0 \uB9DE\uAC8C \uB0A0\uC9DC,\uC2DC\uAC04\uC815\uBCF4\uB97C \uBB38\uC790\uC5F4\uB85C \uBC18\uD658"),cl=t(To,"PRE",{class:!0});var ii=r(cl);ii.forEach(l),To.forEach(l),m.forEach(l),Na=o(c),H=t(c,"H2",{id:!0,class:!0});var rc=r(H);nl=t(rc,"A",{href:!0});var sc=r(nl);Yr=i(sc,"DDL"),sc.forEach(l),rc.forEach(l),Qa=o(c),d=t(c,"UL",{});var u=r(d);K=t(u,"LI",{});var Za=r(K);la=t(Za,"P",{});var oc=r(la);Xr=i(oc,"train \uD14C\uC774\uBE14\uADF8\uB300\uB85C \uBCF5\uC0AC\uD574\uC11C train2\uB77C\uB294 \uD14C\uC774\uBE14\uBA85\uC758 \uD14C\uC774\uBE14 \uC0DD\uC131"),oc.forEach(l),Zr=o(Za),il=t(Za,"PRE",{class:!0});var pi=r(il);pi.forEach(l),Za.forEach(l),Jr=o(u),j=t(u,"LI",{});var Ja=r(j);aa=t(Ja,"P",{});var cc=r(aa);es=i(cc,"\uC0C8\uB85C\uC6B4 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0DD\uC131"),cc.forEach(l),ls=o(Ja),pl=t(Ja,"PRE",{class:!0});var di=r(pl);di.forEach(l),Ja.forEach(l),as=o(u),z=t(u,"LI",{});var et=r(z);ta=t(et,"P",{});var nc=r(ta);ts=i(nc,"\uD14C\uC774\uBE14 \uC218\uB3D9\uC0DD\uC131"),nc.forEach(l),rs=o(et),dl=t(et,"PRE",{class:!0});var ui=r(dl);ui.forEach(l),et.forEach(l),ss=o(u),Y=t(u,"LI",{});var lt=r(Y);ra=t(lt,"P",{});var ic=r(ra);os=i(ic,"\uD14C\uC774\uBE14 \uCEEC\uB7FC \uD0C0\uC785 \uBCC0\uACBD"),ic.forEach(l),cs=o(lt),ul=t(lt,"PRE",{class:!0});var fi=r(ul);fi.forEach(l),lt.forEach(l),ns=o(u),X=t(u,"LI",{});var at=r(X);sa=t(at,"P",{});var pc=r(sa);is=i(pc,"\uD14C\uC774\uBE14 \uCE7C\uB7FC \uC0AD\uC81C"),pc.forEach(l),ps=o(at),fl=t(at,"PRE",{class:!0});var _i=r(fl);_i.forEach(l),at.forEach(l),ds=o(u),Z=t(u,"LI",{});var tt=r(Z);oa=t(tt,"P",{});var dc=r(oa);us=i(dc,"\uC778\uB371\uC2A4 \uC0DD\uC131. \uC218\uC815\uBCF4\uB2E4 \uAC80\uC0C9\uC774 \uC790\uC8FC \uC0AC\uC6A9\uB418\uB294 \uD14C\uC774\uBE14\uC5D0\uC11C \uC0AC\uC6A9."),dc.forEach(l),fs=o(tt),_l=t(tt,"PRE",{class:!0});var vi=r(_l);vi.forEach(l),tt.forEach(l),_s=o(u),J=t(u,"LI",{});var rt=r(J);ca=t(rt,"P",{});var uc=r(ca);vs=i(uc,"\uC778\uB371\uC2A4 \uC0DD\uC131 \uD655\uC778."),uc.forEach(l),Es=o(rt),vl=t(rt,"PRE",{class:!0});var Ei=r(vl);Ei.forEach(l),rt.forEach(l),ms=o(u),ee=t(u,"LI",{});var st=r(ee);na=t(st,"P",{});var fc=r(na);gs=i(fc,"\uC911\uBCF5\uAC12\uC744 \uD5C8\uC6A9\uD558\uC9C0 \uC54A\uB294 \uC778\uB371\uC2A4unique index \uC0DD\uC131."),fc.forEach(l),hs=o(st),El=t(st,"PRE",{class:!0});var mi=r(El);mi.forEach(l),st.forEach(l),ys=o(u),le=t(u,"LI",{});var ot=r(le);ia=t(ot,"P",{});var _c=r(ia);Ls=i(_c,"\uD6C4\uB2E8 \uCE7C\uB7FC \uB4A4\uC5D0 \uCE7C\uB7FC \uCD94\uAC00"),_c.forEach(l),qs=o(ot),ml=t(ot,"PRE",{class:!0});var gi=r(ml);gi.forEach(l),ot.forEach(l),ws=o(u),ae=t(u,"LI",{});var ct=r(ae);pa=t(ct,"P",{});var vc=r(pa);Ps=i(vc,"\uC120\uB2E8 \uCE7C\uB7FC \uC55E\uC5D0 \uCE7C\uB7FC \uCD94\uAC00"),vc.forEach(l),Ms=o(ct),gl=t(ct,"PRE",{class:!0});var hi=r(gl);hi.forEach(l),ct.forEach(l),Is=o(u),te=t(u,"LI",{});var nt=r(te);da=t(nt,"P",{});var Ec=r(da);Rs=i(Ec,"\uC9C0\uC815 \uCE7C\uB7FC \uB4A4\uC5D0 \uCE7C\uB7FC \uCD94\uAC00"),Ec.forEach(l),Ts=o(nt),hl=t(nt,"PRE",{class:!0});var yi=r(hl);yi.forEach(l),nt.forEach(l),Hs=o(u),re=t(u,"LI",{});var it=r(re);ua=t(it,"P",{});var mc=r(ua);bs=i(mc,"\uCE7C\uB7FC\uBA85 \uBCC0\uACBD"),mc.forEach(l),xs=o(it),yl=t(it,"PRE",{class:!0});var Li=r(yl);Li.forEach(l),it.forEach(l),Ss=o(u),se=t(u,"LI",{});var pt=r(se);fa=t(pt,"P",{});var gc=r(fa);As=i(gc,"\uC77C\uBC18\uC801 \uC778\uB371\uC2A4\uC640 \uB2E4\uB974\uAC8C \uB9E4\uC6B0 \uBE60\uB974\uAC8C \uD14C\uC774\uBE14\uC758 \uBAA8\uB4E0 \uD14D\uC2A4\uD2B8\uCEEC\uB7FC \uAC80\uC0C9"),gc.forEach(l),Ns=o(pt),Ll=t(pt,"PRE",{class:!0});var qi=r(Ll);qi.forEach(l),pt.forEach(l),Qs=o(u),oe=t(u,"LI",{});var dt=r(oe);_a=t(dt,"P",{});var hc=r(_a);Cs=i(hc,"index \uC0AD\uC81C"),hc.forEach(l),Ds=o(dt),ql=t(dt,"PRE",{class:!0});var wi=r(ql);wi.forEach(l),dt.forEach(l),Os=o(u),ce=t(u,"LI",{});var ut=r(ce);va=t(ut,"P",{});var yc=r(va);ks=i(yc,"view"),yc.forEach(l),Us=o(ut),wl=t(ut,"PRE",{class:!0});var Pi=r(wl);Pi.forEach(l),ut.forEach(l),Ws=o(u),ne=t(u,"LI",{});var ft=r(ne);Ea=t(ft,"P",{});var Lc=r(Ea);Gs=i(Lc,"view \uCD94\uAC00"),Lc.forEach(l),$s=o(ft),Pl=t(ft,"PRE",{class:!0});var Mi=r(Pl);Mi.forEach(l),ft.forEach(l),Fs=o(u),ie=t(u,"LI",{});var _t=r(ie);ma=t(_t,"P",{});var qc=r(ma);Bs=i(qc,"view \uC0AD\uC81C"),qc.forEach(l),Vs=o(_t),Ml=t(_t,"PRE",{class:!0});var Ii=r(Ml);Ii.forEach(l),_t.forEach(l),Ks=o(u),pe=t(u,"LI",{});var vt=r(pe);ga=t(vt,"P",{});var wc=r(ga);js=i(wc,"\uB370\uC774\uD130 \uC0BD\uC785"),wc.forEach(l),zs=o(vt),Il=t(vt,"PRE",{class:!0});var Ri=r(Il);Ri.forEach(l),vt.forEach(l),Ys=o(u),de=t(u,"LI",{});var Et=r(de);ha=t(Et,"P",{});var Pc=r(ha);Xs=i(Pc,"train4\uD14C\uC774\uBE14 \uB370\uC774\uD130\uB97C train3\uD14C\uC774\uBE14\uB85C \uC804\uCCB4 \uBCF5\uC0AC"),Pc.forEach(l),Zs=o(Et),Rl=t(Et,"PRE",{class:!0});var Ti=r(Rl);Ti.forEach(l),Et.forEach(l),Js=o(u),ue=t(u,"LI",{});var mt=r(ue);ya=t(mt,"P",{});var Mc=r(ya);eo=i(Mc,"\uAE30\uC874\uAC12 \uBCC0\uACBD"),Mc.forEach(l),lo=o(mt),Tl=t(mt,"PRE",{class:!0});var Hi=r(Tl);Hi.forEach(l),mt.forEach(l),ao=o(u),fe=t(u,"LI",{});var gt=r(fe);La=t(gt,"P",{});var Ic=r(La);to=i(Ic,"\uC0AD\uC81C delete \uBCF5\uAD6C \uAC00\uB2A5."),Ic.forEach(l),ro=o(gt),Hl=t(gt,"PRE",{class:!0});var bi=r(Hl);bi.forEach(l),gt.forEach(l),so=o(u),_e=t(u,"LI",{});var ht=r(_e);qa=t(ht,"P",{});var Rc=r(qa);oo=i(Rc,"\uC0AD\uC81C truncate \uC0AD\uC81C\uC2DC \uBCF5\uAD6C \uBD88\uAC00."),Rc.forEach(l),co=o(ht),bl=t(ht,"PRE",{class:!0});var xi=r(bl);xi.forEach(l),ht.forEach(l),no=o(u),ve=t(u,"LI",{});var yt=r(ve);wa=t(yt,"P",{});var Tc=r(wa);io=i(Tc,"\uD14C\uC774\uBE14 \uC0AD\uC81C"),Tc.forEach(l),po=o(yt),xl=t(yt,"PRE",{class:!0});var Si=r(xl);Si.forEach(l),yt.forEach(l),uo=o(u),Ee=t(u,"LI",{});var Lt=r(Ee);Pa=t(Lt,"P",{});var Hc=r(Pa);fo=i(Hc,"\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0AD\uC81C"),Hc.forEach(l),_o=o(Lt),Sl=t(Lt,"PRE",{class:!0});var Ai=r(Sl);Ai.forEach(l),Lt.forEach(l),u.forEach(l),this.h()},h(){p(b,"class","svelte-18ok8b3"),p(he,"class","language-mysql"),p(ye,"class","language-mysql"),p(Le,"class","language-mysql"),p(qe,"class","language-mysql"),p(we,"class","language-mysql"),p(Pe,"class","language-mysql"),p(Me,"class","language-mysql"),p(Ie,"class","language-mysql"),p(Re,"class","language-mysql"),p(Te,"class","language-mysql"),p(He,"class","language-mysql"),p(be,"class","language-mysql"),p(xe,"class","language-mysql"),p(Se,"class","language-mysql"),p(B,"class","language-mysql"),p(V,"class","language-mysql"),p(Ae,"href","#\uB0B4\uC7A5\uD568\uC218"),p(T,"id","\uB0B4\uC7A5\uD568\uC218"),p(T,"class","svelte-18ok8b3"),p(Qe,"class","language-mysql"),p(De,"class","language-mysql"),p(ke,"class","language-mysql"),p(We,"class","language-mysql"),p($e,"class","language-mysql"),p(Be,"class","language-mysql"),p(Ke,"class","language-mysql"),p(ze,"class","language-mysql"),p(Xe,"class","language-mysql"),p(Je,"class","language-mysql"),p(ll,"class","language-mysql"),p(tl,"class","language-mysql"),p(sl,"class","language-mysql"),p(cl,"class","language-mysql"),p(nl,"href","#ddl"),p(H,"id","ddl"),p(H,"class","svelte-18ok8b3"),p(il,"class","language-mysql"),p(pl,"class","language-mysql"),p(dl,"class","language-mysql"),p(ul,"class","language-mysql"),p(fl,"class","language-mysql"),p(_l,"class","language-mysql"),p(vl,"class","language-mysql"),p(El,"class","language-mysql"),p(ml,"class","language-mysql"),p(gl,"class","language-mysql"),p(hl,"class","language-mysql"),p(yl,"class","language-mysql"),p(Ll,"class","language-mysql"),p(ql,"class","language-mysql"),p(wl,"class","language-mysql"),p(Pl,"class","language-mysql"),p(Ml,"class","language-mysql"),p(Il,"class","language-mysql"),p(Rl,"class","language-mysql"),p(Tl,"class","language-mysql"),p(Hl,"class","language-mysql"),p(bl,"class","language-mysql"),p(xl,"class","language-mysql"),p(Sl,"class","language-mysql")},m(c,E){g(c,h,E),e(h,q),g(c,w,E),g(c,P,E),e(P,y),g(c,L,E),g(c,M,E),e(M,qt),g(c,Ma,E),g(c,ge,E),e(ge,wt),g(c,Ia,E),g(c,b,E),e(b,Pt),g(c,Ra,E),g(c,I,E),e(I,Al),e(Al,Mt),e(I,It),e(I,Nl),e(Nl,Rt),g(c,Ta,E),g(c,f,E),e(f,x),e(x,Ql),e(Ql,Tt),e(x,Ht),e(x,he),he.innerHTML=Ac,e(f,bt),e(f,S),e(S,Cl),e(Cl,xt),e(S,St),e(S,ye),ye.innerHTML=Nc,e(f,At),e(f,A),e(A,Dl),e(Dl,Nt),e(A,Qt),e(A,Le),Le.innerHTML=Qc,e(f,Ct),e(f,N),e(N,Ol),e(Ol,Dt),e(N,Ot),e(N,qe),qe.innerHTML=Cc,e(f,kt),e(f,Q),e(Q,kl),e(kl,Ut),e(Q,Wt),e(Q,we),we.innerHTML=Dc,e(f,Gt),e(f,Ul),e(Ul,Wl),e(Wl,$t),e(f,Ft),e(f,C),e(C,Gl),e(Gl,Bt),e(C,Vt),e(C,Pe),Pe.innerHTML=Oc,e(f,Kt),e(f,D),e(D,$l),e($l,jt),e(D,zt),e(D,Me),Me.innerHTML=kc,e(f,Yt),e(f,O),e(O,Fl),e(Fl,Xt),e(O,Zt),e(O,Ie),Ie.innerHTML=Uc,e(f,Jt),e(f,k),e(k,Bl),e(Bl,er),e(k,lr),e(k,Re),Re.innerHTML=Wc,e(f,ar),e(f,U),e(U,Vl),e(Vl,tr),e(U,rr),e(U,Te),Te.innerHTML=Gc,e(f,sr),e(f,Kl),e(Kl,jl),e(jl,or),e(f,cr),e(f,W),e(W,zl),e(zl,nr),e(W,ir),e(W,He),He.innerHTML=$c,e(f,pr),e(f,G),e(G,Yl),e(Yl,dr),e(G,ur),e(G,be),be.innerHTML=Fc,e(f,fr),e(f,$),e($,Xl),e(Xl,_r),e($,vr),e($,xe),xe.innerHTML=Bc,e(f,Er),e(f,F),e(F,Zl),e(Zl,mr),e(F,gr),e(F,Se),Se.innerHTML=Vc,g(c,Ha,E),g(c,R,E),e(R,Jl),e(Jl,hr),e(R,yr),e(R,ea),e(ea,Lr),g(c,ba,E),g(c,B,E),B.innerHTML=Kc,g(c,xa,E),g(c,V,E),V.innerHTML=jc,g(c,Sa,E),g(c,T,E),e(T,Ae),e(Ae,qr),g(c,Aa,E),g(c,_,E),e(_,Ne),e(Ne,wr),e(Ne,Qe),Qe.innerHTML=zc,e(_,Pr),e(_,Ce),e(Ce,Mr),e(Ce,De),De.innerHTML=Yc,e(_,Ir),e(_,Oe),e(Oe,Rr),e(Oe,ke),ke.innerHTML=Xc,e(_,Tr),e(_,Ue),e(Ue,Hr),e(Ue,We),We.innerHTML=Zc,e(_,br),e(_,Ge),e(Ge,xr),e(Ge,$e),$e.innerHTML=Jc,e(_,Sr),e(_,Fe),e(Fe,Ar),e(Fe,Be),Be.innerHTML=en,e(_,Nr),e(_,Ve),e(Ve,Qr),e(Ve,Ke),Ke.innerHTML=ln,e(_,Cr),e(_,je),e(je,Dr),e(je,ze),ze.innerHTML=an,e(_,Or),e(_,Ye),e(Ye,kr),e(Ye,Xe),Xe.innerHTML=tn,e(_,Ur),e(_,Ze),e(Ze,Wr),e(Ze,Je),Je.innerHTML=rn,e(_,Gr),e(_,el),e(el,$r),e(el,ll),ll.innerHTML=sn,e(_,Fr),e(_,al),e(al,Br),e(al,tl),tl.innerHTML=on,e(_,Vr),e(_,rl),e(rl,Kr),e(rl,sl),sl.innerHTML=cn,e(_,jr),e(_,ol),e(ol,zr),e(ol,cl),cl.innerHTML=nn,g(c,Na,E),g(c,H,E),e(H,nl),e(nl,Yr),g(c,Qa,E),g(c,d,E),e(d,K),e(K,la),e(la,Xr),e(K,Zr),e(K,il),il.innerHTML=pn,e(d,Jr),e(d,j),e(j,aa),e(aa,es),e(j,ls),e(j,pl),pl.innerHTML=dn,e(d,as),e(d,z),e(z,ta),e(ta,ts),e(z,rs),e(z,dl),dl.innerHTML=un,e(d,ss),e(d,Y),e(Y,ra),e(ra,os),e(Y,cs),e(Y,ul),ul.innerHTML=fn,e(d,ns),e(d,X),e(X,sa),e(sa,is),e(X,ps),e(X,fl),fl.innerHTML=_n,e(d,ds),e(d,Z),e(Z,oa),e(oa,us),e(Z,fs),e(Z,_l),_l.innerHTML=vn,e(d,_s),e(d,J),e(J,ca),e(ca,vs),e(J,Es),e(J,vl),vl.innerHTML=En,e(d,ms),e(d,ee),e(ee,na),e(na,gs),e(ee,hs),e(ee,El),El.innerHTML=mn,e(d,ys),e(d,le),e(le,ia),e(ia,Ls),e(le,qs),e(le,ml),ml.innerHTML=gn,e(d,ws),e(d,ae),e(ae,pa),e(pa,Ps),e(ae,Ms),e(ae,gl),gl.innerHTML=hn,e(d,Is),e(d,te),e(te,da),e(da,Rs),e(te,Ts),e(te,hl),hl.innerHTML=yn,e(d,Hs),e(d,re),e(re,ua),e(ua,bs),e(re,xs),e(re,yl),yl.innerHTML=Ln,e(d,Ss),e(d,se),e(se,fa),e(fa,As),e(se,Ns),e(se,Ll),Ll.innerHTML=qn,e(d,Qs),e(d,oe),e(oe,_a),e(_a,Cs),e(oe,Ds),e(oe,ql),ql.innerHTML=wn,e(d,Os),e(d,ce),e(ce,va),e(va,ks),e(ce,Us),e(ce,wl),wl.innerHTML=Pn,e(d,Ws),e(d,ne),e(ne,Ea),e(Ea,Gs),e(ne,$s),e(ne,Pl),Pl.innerHTML=Mn,e(d,Fs),e(d,ie),e(ie,ma),e(ma,Bs),e(ie,Vs),e(ie,Ml),Ml.innerHTML=In,e(d,Ks),e(d,pe),e(pe,ga),e(ga,js),e(pe,zs),e(pe,Il),Il.innerHTML=Rn,e(d,Ys),e(d,de),e(de,ha),e(ha,Xs),e(de,Zs),e(de,Rl),Rl.innerHTML=Tn,e(d,Js),e(d,ue),e(ue,ya),e(ya,eo),e(ue,lo),e(ue,Tl),Tl.innerHTML=Hn,e(d,ao),e(d,fe),e(fe,La),e(La,to),e(fe,ro),e(fe,Hl),Hl.innerHTML=bn,e(d,so),e(d,_e),e(_e,qa),e(qa,oo),e(_e,co),e(_e,bl),bl.innerHTML=xn,e(d,no),e(d,ve),e(ve,wa),e(wa,io),e(ve,po),e(ve,xl),xl.innerHTML=Sn,e(d,uo),e(d,Ee),e(Ee,Pa),e(Pa,fo),e(Ee,_o),e(Ee,Sl),Sl.innerHTML=An},p:Fi,d(c){c&&l(h),c&&l(w),c&&l(P),c&&l(L),c&&l(M),c&&l(Ma),c&&l(ge),c&&l(Ia),c&&l(b),c&&l(Ra),c&&l(I),c&&l(Ta),c&&l(f),c&&l(Ha),c&&l(R),c&&l(ba),c&&l(B),c&&l(xa),c&&l(V),c&&l(Sa),c&&l(T),c&&l(Aa),c&&l(_),c&&l(Na),c&&l(H),c&&l(Qa),c&&l(d)}}}function Ki(me){let h,q;const w=[me[0],Sc];let P={$$slots:{default:[Vi]},$$scope:{ctx:me}};for(let y=0;y<w.length;y+=1)P=Ho(P,w[y]);return h=new Bi({props:P}),{c(){Di(h.$$.fragment)},l(y){Oi(h.$$.fragment,y)},m(y,L){ki(h,y,L),q=!0},p(y,[L]){const M=L&1?Ui(w,[L&1&&bc(y[0]),L&0&&bc(Sc)]):{};L&2&&(M.$$scope={dirty:L,ctx:y}),h.$set(M)},i(y){q||(Wi(h.$$.fragment,y),q=!0)},o(y){Gi(h.$$.fragment,y),q=!1},d(y){$i(h,y)}}}const Sc={layout:"mdx",title:"MySQL !",update:"2022-11-19",categories:"\uBD84\uB958:MySQL, \uC5F0\uC2B5"};function ji(me,h,q){return me.$$set=w=>{q(0,h=Ho(Ho({},h),xc(w)))},h=xc(h),[h]}class Xi extends Ni{constructor(h){super(),Qi(this,h,ji,Ki,Ci,{})}}export{Xi as default,Sc as metadata};
