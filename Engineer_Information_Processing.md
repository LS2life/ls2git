UML >?
	Unified Modeling Language
        .연관관계   Association     HAS-A
        .의존관계   Dependency      USE
        .집약관계   Aggregation
        .합성관계   Composition
        .실체화관계 Realization     implement
    .특징
        .가시화 언어 : 의사소통 용이
        .구축 언어   : 다양한 언어로 변환가능
        .문서화 언어 : 시스템 문서
        .명세화 언어 : 개발요소 및 기능
    .UML 다이어그램 종류 >
        .Structural 구조적
            .Class
            .Object     인스턴스
            .Component  컴포넌트
            .Deployment 컴포넌트 사이의 종속성 표현
            .Pakage     시스템 계층구조 표현
            .Composite Structure 전체클레스 안에 각 컴포넌트 클래스 표현

        .Behavioral 행위
            .Use Case   기능 정의
            .State      상태 정의
            .Activity   순서 처리

        .Interaction 상호작용
            .Sequence       시간흐름대로 표시
            .Communication  참여 객체/컴포넌트간의 관계
            .Interaction Overview   상호작용 제어흐름
            .Timing         시간제약, 객체상

Rumbaugh 럼바우>?
    객체 모델링 기술
    OMT,    Object Modeling Technique
    : 객체지향 분석 Object Oriented Analysis 방법론 중 하나

    .Rumbaugh >
        .객체모델링 Object Modeling     객체간의 관계 규정
        .동적~      Dynamic Modeling    시스템 행위 기술
        .기능~      Fnuction Modeling   어떤결과를 구할 것인가?
            .2 데이터 흐름도 DFD  Data Flow Diagram 사용
            : 사용자 요구사항 파악
                .3 처리         Process     원
                .3 자료흐름     Flow        화살표 위
                .3 자료 저장소  Data Store  평행선 안
                .3 단말         Terminal    사각형 안

    .Booch 부치>
    : 절차 동사, 객체 명사

    .Coad & Yourdon >
    : E-R 모델링

    .Wirfs-Brock 워스프-브록 >
    : 연속적 수행

코드설계 >
    .블록~      Block~
    .순서~      Sequence~
    .블록순서~  Block Seqnce~
    .그룹분류   Group Classification~
    .10진분류   Decimal ~               10진수만 사용, 한자리만 허용.
    .끝자리     Final Digit~            끝에 한자리 추가
    .연상       Mnemonic~               KOR, USA 등
    .표의숫자   Significant Digit~      타이어 번호
    .합성코드   Combined~               코드 조합

GoF > Gang of Four
    .생성패턴
    .구조~
    .행위~

Middleware 미들웨어 >
    : 각종 어플에대한 표준 인터페이스 제공
    .종류
        .2 RPC > Remote Procedure Call
            : 원격 절차 | 원격 프로시저 호출
        .2 ORB > object request broker
            : 객체간 메세지 전달을 지원하는 미들웨어
        .2 TP monitor >
            : 트랜잭션 처리를 감시/제어하는 미들웨어
        .2 HUB >
            : 여러 네트워크 연결태
        .2 MOM > Message Oriented Middleware
            : 비동기식 미들웨어
        .2 DB 접속 미들웨어
            : app과 DB 연결
        .2 WAS > Web Application Server HUB
            : 웹환경 구성용

Requirements analysis 요구사항분석 >
    :사용자 요구사항 문서화
    .문제인식
    .평가와 종합
    .모델 제작
    .문서화와 검토

공통 모듈의 작성원칙 >
    .Correctness    정확성
    .Clarity        명~
    .Compleeness    완전성
    .Consistency    일관성

Boundary Balue Analysis 경계값 분석 >
    : 경계값의 +1 또는 경계값의 -1 과 같은 인접한 항목 테스트

트리용어 >
    .root node      루트    부모 없는 노드
    .leaf node      단말    자식 없는 노드
    .internal node  내부    루트나 단말이 아닌 노드
    .link           링크    연결 선, edge, branch
    .sibling        형제    같은 부모
    .size           크기    자신포함 모든 자손노드의 개수

TCP/IP > IPS ?
    TCP     Transmission Control Protocol
    IP      Internet Protocol
    IPS     Internet Protocol Suite
