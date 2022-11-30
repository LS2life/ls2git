---
layout: mdx
title: 'MySQL !'
update: '2022-11-19'
categories: 분류:MySQL, 연습
---

<p>호스팅 서버에 접속해서 터미널로 MySQL 스키마로 접속하거나 MySQL Workbench사용</p>
<p>결과적으로는 뭘 써도 같다.</p>
<p>CSV 데이터를 직접 로컬에서 넣기때문에 쿼리문 작성에 시간이 좀 더 걸릴 수도?? </p>
<p>검은 화면보는게 재미있긴한데 효율을 따지자면 워크밴치가 약간 앞서는것 같다.</p>


<h2>MySQL Workbench</h2>
<ul>
    <li>파일 인코딩 확인할 것.</li>
    <li>DB 접속후 Table data import Wizard로 데이터 주입. </li>
</ul>

- 데이터베이스 보기
    ```mysql 
        show databases;
    ```
- 특정 데이터베이스 사용

    ```mysql
        use dbplayground;
    ```
- 테이블 보기
    ```mysql
        show tables;
    ```
- 테이블 스테이터스 보기
    ```mysql
        show table status;
    ```
- 테이블정보 보기
    ```mysql 
        describe train; 
        desc train;
    ```
- 기본적인 where 
- select 필드명 from 테이블명 where 조건식;
    ```mysql
        select name, sex, age from train where age > 22;
    ```

- 특정 칼럼 선택 혹은 모두 선택 
    ```mysql
    select * from train;
    select name,age,sex,pclass from train;
    ```
- 이름, 성별, 나이, 승선등급 칼럼만 보이고 나이가 22세이상, 1등급이상, 여성인 데이터 출력
    ```mysql
        SELECT name, sex, age, pclass FROM train WHERE age > 22 AND pclass = 1
        AND sex = 'female';
    ```
- between은  10~300 처럼 범위 값을 지정, 보여주는 테이블에 조회값칼럼이 없어도 가능하다.
    ```mysql
        SELECT name, sex FROM train WHERE age BETWEEN 30 AND 50;
    ```
- 이산값(Discrete) 조건에서 IN 사용 
    ```mysql
        SELECT name, sex, age, pclass FROM train WHERE sex IN ('female') AND pclass = 1;
    ```
- LIKE 문자열내용 검색
- 문자뒤에 %를 쓰면 무엇이든 허용, 한글자는 _ 언더바 사용.
    ```mysql
        SELECT name, sex, age, pclass FROM train WHERE name LIKE '%Am%';
        SELECT name, sex, age FROM train WHERE name LIKE '% _enr_';
    ```

- sub query
    ```mysql
        select name, sex, age, pclass from train where age > any ( select age from train where pclass=1);
    ```

- order by 결과 출력순서를 오름차순, 내림차순으로 할 수 있다.
-- 기본값은 오름차순ascending asc는 생략가능, 내림차순은 descending 열 이름뒤에 desc를 적을 것.
    ```mysql
        select name, sex, age, pclass from train order by age desc; 
    ```

- distinct  중복되는것들은 하나만 출력
    ```mysql
        select distinct age from train order by agetrain;
    ```


- GROUP BY 그룹으로 묶어준다.
- 집계 함수 AGGREGATE FUNCTION 을 함께 사용.
```mysql
AVG() 평균, MIN(), MAX()
COUNT() 행ROW의 개수, COUNT(DISTINCT) 중복 제외된 행의 개수
STDEV() 표준 편차, VARIANCE() 분산
별칭ALIAS 사용가능
```

    ```mysql
        select pclass, avg(fare) as '요금' from train group by pclass order by pclass;
        select avg(fare) from train;
        select avg(age) from train;
    ```

- where와 비슷한 개념. 집계함수 조건설정. 반드시 Group by 절 다음에 사용.
    ```mysql
        select name, max(fare) from train group by name having max(fare) > 100;
    ```

- Rollup 총합, 중간합계가 필요할 경우 Group by 절과 함께 with rollup 사용.
- name 값 중복될 때 합계
select embarked,pclass, sex, SUM(fare) from train group by embarked,pclass,sex with rollup;

- join : 여러개 테이블에서 가져온 레코드를 조합하여 하나의 테이블로 표현.
- lab

```mysql
```
## 내장함수
- 문자열 길이 반환
    ```mysql
    select length('sdfsdgds');
    ```
- 문자열 모두 결합. 전달받은 문자열 중 하나라도 null이 있으면 null 반환.
    ```mysql
    select concat('My', 'sql Op', 'en Sourece'),concat('MySQL', NULL, 'OpenSource');
    ```
- 문자열 내에서 찾는 문자열이 처음으로 나타나는 위치를 찾아서 해당 위치를 반환
-# index 번호가 1부터 시작한다. (0부터 시작하지 않는다.), 공백포함, 
    ```mysql
    select locate('abc', 'advdgefdwtabcdfwfds');
    select locate('abc', 'safdswf abcsfdsf');
    ```
- 왼쪽, 오른쪽 방향에서 지정한 개수만큼 문자열 반환
    ```mysql
    select left('MySQL is an open source relational database management system', 4);
    select left('MySQL is an open source relational database management system', 4),
    right('MySQL is an open source relational database management system', 4);
    ```
- 대소문자로 일괄변경
    ```mysql
    select lower('MySQL is an open source relational database management system' ),
    upper('MySQL is an open source relational database management system');
    ```
- 문자열에서 특정 문자열을 대체 문자열로 교체, 대소문자 구문함.
    ```mysql
    select replace('mssql','ms','my');
    select replace('MsSQL','ms','my');
    ```
- 문자열 앞뒤, 양쪽 모두의 특정문자제거
    ```mysql
    select trim('           MySQL   '),
    trim(leading '-' from '### MySQL##'),
    trim(trailing '-' from '###MySQL##');
    ```
- 숫자탑입 데이터를 3번째자리마다 쉼표. 단, 반환될때는 문자열로 반환. 두번 째 인수는 소수점 자릿수
    ```mysql
    select format(123123123123123.123123123, 3);
    ```
- 내림, 올림, 반올림.
    ```mysql
    select floor(5.5), ceil(5.5), round(5.5);
    ```
- 양의 제곱근. (밑수,인수)거듭제곱. 인수지수거듭제곱. 자연로그.
    ```mysql
    select sqrt(4), pow(2,3), exp(3), log(3);
    ```
- 삼각함수. 사인. 코사인. 탄젠트.
    ```mysql
    select sin(pi()/2), cos(pi()), tan(pi()/4);
    ```
- 절대값 반환. 0.0보다 크거나 같고 1.0보다 작은 하나의 실수 무작위 생성.
    ```mysql
    select abs(-3), rand(), round(rand()*100,0);
    ```
- 날짜 세계표준시기준 . 현재시간, 현재날짜, 현재시각;
    ```mysql
    select now(), curdate(), curtime();
    select now(), date(now()),month(now()), day(now()), hour(now()), minute(now()), second(now());
    select now(), monthname(now()), dayname(now());
    select now(), dayofweek(now()), dayofmonth(now()), dayofyear(now());
    ```
- 전달형식에 맞게 날짜,시간정보를 문자열로 반환
    ```mysql
    select date_format(now(), '%d %y %a %d %m %n %j');
    ```

## DDL
- train 테이블그대로 복사해서 train2라는 테이블명의 테이블 생성
    ```mysql
    create table train2 as select * from train;
    ```
- 새로운 데이터베이스 생성
    ```mysql
    create database dir;
    use dir;
    ```
- 테이블 수동생성
    ```mysql
    create table train3 (
        id int not null primary key,
        col1 int null,
        col2 float null,
        col3 varchar(45) null
    );

    desc train3;
    select * from train3;
    ```
- 테이블 컬럼 타입 변경
    ```mysql
    alter table train3 modify col1 varchar(20) null;
    ```
- 테이블 칼럼 삭제
    ```mysql
    alter table train3 drop col3;
    ```

- 인덱스 생성. 수정보다 검색이 자주 사용되는 테이블에서 사용.
    ```mysql
    create index col3idx on train3(col3);
    ```
- 인덱스 생성 확인.
    ```mysql
    show index from train3;
    desc train3;
    ```
- 중복값을 허용하지 않는 인덱스unique index 생성.
    ```mysql
    create unique index col3idx on train3(col3);
    show index from train3;
    ```
- 후단 칼럼 뒤에 칼럼 추가
    ```mysql
    alter table train3 add (col4 float null);
    ```
- 선단 칼럼 앞에 칼럼 추가
    ```mysql
    alter table train3 add col0 varchar(40) first;
    ```
- 지정 칼럼 뒤에 칼럼 추가
    ```mysql
    alter table train3 add col5 char(30) after col4;
    ```
- 칼럼명 변경
    ```mysql
    alter table train3 change col0 colnum int;
    desc train3;
    show index from train3;
    ```
- 일반적 인덱스와 다르게 매우 빠르게 테이블의 모든 텍스트컬럼 검색
    ```mysql
    Alter table train3 add fulltext col6idx(col6);
    ```
- index 삭제
    ```mysql
    alter table train3 drop index col3idx;
    drop index col2idx on train3;
    ```

- view
    ```mysql
    create view testview as select col1, col2 from train3; 
    select * from testview;
    ```
- view 추가
    ```mysql
    alter view testview as select col1, col2, col3 from train3;
    select * from testview;
    ```
- view 삭제
    ```mysql
    drop view testview;
    ```
- 데이터 삽입
    ```mysql
    insert into train3 value(1,3,4,5,6,6,'test');
    select * from train3;
    ```
- train4테이블 데이터를 train3테이블로 전체 복사
    ```mysql
    insert into train3 select * from train4;
    select * from train3;
    ```
- 기존값 변경
    ```mysql
    update train3 set col1=1, col2=7.0 where id=1;
    ```
- 삭제 delete 복구 가능.
    ```mysql
    delete from train3 where id=1;
    ```
- 삭제 truncate 삭제시 복구 불가.
    ```mysql
    truncate table train3;
    ```

- 테이블 삭제
    ```mysql
    drop table train3;
    ```
- 데이터베이스 삭제
    ```mysql
    drop database soso;
    ```

<style>
    h2 {
        font-size: 1.5rem;
    }
</style>