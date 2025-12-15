# Moon Seoyeon AI Competition Portfolio

## 프로젝트 개요
- 아파트 실거래가 예측 대회의 모델 개발 과정과 성능 검증 결과를 한눈에 확인할 수 있도록 구성한 싱글 페이지 대시보드입니다.
- 대회 기간 동안 수행한 18개의 유의미한 제출 기록을 정제해 시각화하고, 모델 성능 개선 흐름과 최종 선택 모델을 명료하게 전달하는 것을 목표로 합니다.
- AI 연구·개발 직무 지원 포트폴리오를 위해 기획되었으며, 프론트엔드 관점에서 데이터 로깅, 실험 관리, 성능 분석 역량을 강조합니다.

## 주요 기능 하이라이트
- **탭 기반 레이아웃**: `Dashboard`와 `History` 두 가지 관점에서 실험 기록을 탐색할 수 있습니다.
- **핵심 지표 카드**: 퍼블릭 리더보드 최고 RMSE, 베이스라인 대비 개선율, 성공 제출 횟수를 즉시 확인할 수 있도록 카드 형태로 제공 (`MetricCard`).
- **성능 추적 라인 차트**: 퍼블릭/프라이빗 점수를 시계열로 비교하며 성능 안정화 과정을 분석 (`SubmissionChart`).
- **세부 제출 로그 테이블**: 모델 설명, 점수, 제출 시각, 최종 선택 여부, 상태를 조망하는 정밀 표 (`SubmissionTable`).

## 데이터 및 지표 산출 로직
- 데이터는 `constants.ts`에 정의된 `SUBMISSION_HISTORY` 배열로 관리하며, 실패 기록은 제외된 상태로 하드코딩되어 있습니다.
- `App.tsx`에서 제출 기록을 날짜 기준 정렬한 뒤, 초기(Base) RMSE와 최고(Peak) RMSE를 비교하여 **개선율(%)**을 계산합니다.
- 퍼블릭/프라이빗 점수는 모두 소수 네 자리까지 포매팅하며, 대시보드 카드와 상세 테이블에 일관되게 반영됩니다.
- 차트용 데이터는 `SubmissionChart` 컴포넌트에서 필터링과 가공을 수행해 `Recharts` 라인 차트에 주입합니다.

## 프런트엔드 구조
- `App.tsx`: 페이지 라우팅 없이 전역 상태(`activeTab`)로 뷰를 전환하고, 카드/차트/테이블 컴포넌트를 조립합니다.
- `components/MetricCard.tsx`: 핵심 지표 카드 UI 컴포넌트.
- `components/SubmissionChart.tsx`: 제출 이력 시계열 시각화(Responsive Line Chart).
- `components/SubmissionTable.tsx`: 제출 상세 내역 테이블 뷰(상태/선정 여부 표시 포함).
- `types.ts`: 제출 데이터 스키마 정의로 타입 안정성을 확보합니다.

## 기술 스택
- **Framework**: React 19 + Vite
- **언어**: TypeScript (strict module resolution)
- **UI**: Tailwind CSS CDN, Lucide 아이콘
- **시각화**: Recharts

## 로컬 실행 방법
1. Node.js (v18 이상 권장)를 설치합니다.
2. 의존성을 설치합니다.  
   `npm install`
3. 개발 서버를 실행합니다.  
   `npm run dev`
4. 브라우저에서 안내된 로컬 주소(기본값 `http://localhost:5173`)로 접속합니다.

## 프로젝트 구조
```
ML_portfolio/
├── App.tsx                # 메인 페이지 컴포지션 및 상태 관리
├── components/
│   ├── MetricCard.tsx     # 핵심 성과 카드
│   ├── SubmissionChart.tsx# 성과 추이 차트
│   └── SubmissionTable.tsx# 제출 이력 테이블
├── constants.ts           # 사용자/대회 정보 및 제출 이력 데이터
├── types.ts               # TypeScript 인터페이스 정의
├── index.html             # Tailwind 및 import map 설정
├── index.tsx              # React DOM 마운트 엔트리
├── package.json           # 빌드 및 런타임 의존성
└── vite.config.ts         # Vite 빌드 설정
```

## 향후 확장 아이디어
- **실시간 데이터 연동**: A/B 실험 플랫폼이나 외부 스토리지 API와 연계하여 제출 로그를 자동으로 갱신.
- **모델 메타데이터 확장**: 하이퍼파라미터, 특징 공학 전략, 검증 스코어 등 추가 변수 시각화.
- **분석 리포트 자동화**: 제출 이력 기반으로 PDF 리포트 또는 슬라이드 자동 생성 기능 추가.
- **사용자 인증**: 팀 단위 경쟁을 고려해 역할 기반 접근 제어를 지원.

해당 프로젝트는 모델 성능 관리 워크플로우를 시각적으로 표현하는 데 초점을 맞추고 있으며, 데이터 기반 실험 프로세스를 체계적으로 전달하고자 설계되었습니다.
