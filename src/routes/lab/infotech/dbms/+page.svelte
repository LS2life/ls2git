<h1>DataBasE</h1>

<hr>

<h2>Key-value Database</h2>
<ul>
    <li> key : value 형태 </li>
    <li> 1차 ram 저장</li>
    <li> 데이터 캐싱, Pub/Sub, 영상스트리밍, 로그인 기록저장 등 </li>
    <li> 서브 DB</li>
    <img src="https://goodgid.github.io/assets/img/posts/redis_1.png" alt="Redis" style='height:3rem'>
</ul>
<h2>Relational Database</h2>
<ul>
    <li> 관계형 데이터 베이스</li>
    <li> 데이터 정규화됨</li>
    <li> ACID Transaction 기능</li>
    <li> 엑셀 </li>
    <img src="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png" alt="MySQL">

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1200px-SQLite370.svg.png" alt="SQLite">
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdaK0qX%2FbtroKENpkRf%2F5VNBwjX5sEEdrRYi8tZEKk%2Fimg.png" alt="Oracle DB">
    <img src="https://news.microsoft.com/wp-content/uploads/2014/12/img_140301_02_Web.jpg" alt="SQL Server">
    <img src="https://miro.medium.com/max/524/1*8re1MiCQfSqRnXn1ZX69sA.png" alt="Google cloud spanner">
    <img src="https://d1.awsstatic.com/logos/partners/MariaDB_Logo.d8a208f0a889a8f0f0551b8391a065ea79c54f3a.png" alt="MariaDB">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uh9ZygNef4X4wRrb2tM7BXgnRmQB1sroGzzA2HMqRLCe_xuFeY7x9g0XalVRpQ_Tjg&usqp=CAU" alt="IBM DB2">
    <img src="https://www.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2021-09/ECX-1909_Hero_PostgreSQL_600x400%402x.png" alt="PostgreSQL">
</ul>

<h2>Graph Database</h2>
<ul>
    <li> 관계형 DB보다 더 관계형인 관계형DB</li>
    <li>비행기 노선, 친구관계, 추천서비스 등</li>
    <sparsity>*Sparsity</sparsity>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Neo4j-logo_color.png/800px-Neo4j-logo_color.png" alt="neo4j">
    <img src="https://upload.wikimedia.org/wikipedia/en/d/dc/OrientdbLogo.png" alt="OrientDB">
    <img src="https://www.arangodb.com/wp-content/uploads/2016/05/ArangoDB_logo_@2.png" alt="ArangoDB">
</ul>

<h2>Document Database</h2>
<ul>
    <li> collection > document > json &#123 key:value &#125</li>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt="mongoDB">
    <img src="https://files.dimagi.com/wp-content/uploads/2016/03/0921.sdt-news-a.png" alt="CouchDB">
    <img src="https://miro.medium.com/max/1400/1*a2Da_CQHUsSKTCTRI2tYhQ.png" alt="Cloud Firestore">
</ul>

<h2>Column-family Database</h2>
<ul>
    <li>cql 같은 전용 언어 사용하는 것도 있음</li>
    <li>정규화 안함, 분산 복제 잘됨</li>
    <li>시계열 데이터 분석</li>
    <li>데이터 일관성 부족</li>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cassandra_logo.svg/2560px-Cassandra_logo.svg.png" alt="cassandra">
    <img src="https://hbase.apache.org/images/hbase_logo_with_orca_large.png" alt="Apache Hbase">
    <img src="https://miro.medium.com/max/484/1*NFkBGPrxSV0jM1-ga74I9g.png" alt="Google Cloud Bigtable">
</ul>

<h2>Search engine</h2>
<ul>
    <li>검색용 인덱스보관용 DB</li>
    <li>index 보관 특화</li>
    <li>실시간 검색어, 추천 검색어, 검색어 오타교정 등</li>
    <img src="https://play.vidyard.com/Gfs339uMBi1CVavZEjXVZ8.jpg" alt="elastic">
    <img src="https://d1.awsstatic.com/video-thumbs/CloudSearch/video-thumb-cloudsearch-overview.e3f348f85306893ca38c1f13a294afe357f9803d.jpg" alt="Amazon ClouldSearch">
    <img src="https://www.gstatic.com/images/branding/product/1x/google_cloud_search_512dp.png" alt="Google Cloud Search">
</ul>

<style>
    h1 { font-size: 3rem; }
    h2 { font-size: 2rem; }
    ul { font-size: 1.5rem; }
    img { padding: 1.5rem; height: 3rem;}
    sparsity {
        display: inline-block;
        color: white;
        background-color: skyblue;
        padding: 7px;
    }
</style>