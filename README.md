# 설명

travel 폴더에 들어가서 `npm run serve` 입력하시면 됩니다.
접속 URL = https://app2le-traveler.run.goorm.io    로 해놨는데 안 되시면 상단 메뉴 > 프로젝트 > 속성 > 실행 URL과 포트 에서 실행용이라 체크 되어있는 부분의 링크를 클릭해주시면 감사하겠습니다.

#### 1. 소속

	1군단 1포병여단 2포병단 898대대 본부포대

#### 2. 계급

	상병

#### 3. 성명

	이현배

#### 4. 프로젝트명

	야 가 자 - SNTS (Social Network Traver Service)

#### 5. 발사믹 주소

	Link : https://balsamiq.cloud/slnb4hg/puf3vvn/r2278
	ID : hyeon5727@gmail.com
	PW : 오픈소스123 ( dhvmsthtm123 )

#### 6. 프로젝트 설명

	요즘 SNS 를 보면 많은 사람들이 여행에 가서 즐거운 시간을 보내는 것을 확인할 수 있습니다.
	현대인들 뿐만 아니라 매일 똑같은 일상을 살고 있는 군 장병들도 전역 후 여행을 갈
	마음을 먹은 적이 있을 것입니다. 하지만 막상 여행 계획을 짜려고 하면 어떻게 계획을 짜야할지 막막한
	경우가 많습니다. 또 간만에 여행 갔는데 볼거리들을 다 못 보고 오는 아쉬운 경우가 생길 수도 있습니다.
	계획을 짜는데 여러 정보들을 제공하고 여러 사람들과 자신의 계획들을 공유할 수도 있다면 좋겠다는 생각에
	이 서비스를 만들게 되었습니다. 보다 쉽게 계획을 짤 수 있도록 지도에다 직접적으로 좌표를 찍고, 모든
	작업이 지도에서 발생하게 만들어서 직관성을 높였습니다. SNS를 접목시켜 서비스의 향후 확장성을 올렸습니다.

#### 7. 주요 완료 기능

텍스트 값 변경을 제외한 모든 기능들은 **마우스 클릭**으로만 작업됩니다.

**로그인, 회원가입 **

	상단 바에서 로그인, 회원가입을 할 수 있으며 클릭시 창이 뜹니다.

**메뉴UI 접고 펴기 **

	기본 메뉴 UI를 접었다 펼 수 있습니다.

**  맵에 좌표생성  **

	맵에 우측 클릭을 하면 좌표를 생성 할 수 있습니다. 생성 된 좌표들은 우측 메뉴 Plans 에 담아집니다.

** 좌표 삭제, 변경 **

	생성 된 좌표들은 Plans 에서 지울 수도 있고, 순서를 바꿀 수도 있습니다.

** 특정좌표로 이동 **

	생성 된 좌표의 제목을 클릭하면 Map에서 해당 좌표로 이동하게 되고, 주변의 주요 관광지들을 Map에다 추가적으로 표시해 줍니다.

**  경로 계산하기  **

	생성 된 좌표들이 두개 이상이 되면(출발, ..., 목적지) Plans에서 '경로 계산하기' 를 누르면 최적의 경로를 제공합니다. 계산된 경로의 자세한 정보들은 PlansInfo에 업데이트 됩니다.

**  계획 저장하기  **

	Plans 에서 계획의 저장을 할 수가 있습니다.

**  계획 공유하기  **

	Plans 에서 공유하기로 다른 사람들과 정보 공유를 할 수 있습니다.

** 계획 코드생성 **

	Plans 에서 코드생성을 하면 계획의 고윳값이 생성됩니다. 이 고윳값을 TimeLine에 'Type your code'에 입력하면 특정 계획을 불러옵니다.

**  계획 불러오기  **

	PlansInfo 에서 이전에 저장된 계획들을 불러올 수 있습니다. TimeLine 에서도 다른 사람의 계획들이 담겨있는데, 클릭시 해당 계획으로 Plans를 업데이트 할 수 있습니다. 자동으로 최적의 경로가 매칭 된 상태로 업데이트 됩니다.

**   계획 재사용   **

	저장된 계획 불러오기, 타임라인의 계획 불러오기를 통해 생성된 계획은 수정, 저장, 초기화 가 가능합니다.

#### 7. 미완료 기능

** 장소 검색 **

	장소 검색을 통해 해당 좌표로 이동할 수 있도록 합니다.

** 좌표 드래그 **

	맵에서 좌표가 draggable 하게 바꾸는 것이 가능하게 합니다.

** 타임라인 업데이트**

	서버에서 데이터를 불러오도록 하여, 자동으로 업데이트 되게 합니다.

** UI의 가시성 **

	맵의 테마와 좌표의 아이콘을 수정 가능하게 합니다.

#### 8. 향후 계획

	서버를 만들어서 SNS와 연동하여, 사람들의 계획 데이터들을 통해서 2차, 3차 서비스를 만드는 것이 계획입니다.
	데이터들이 모이면 모일 수록 사람들에게 제공할 수 있는 관광지 정보가 많아 질 것으로 예상되며, 이를 활용하여
	데이터들을 이용하여 기업들과의 연결을 만들 생각입니다.

# travel

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
