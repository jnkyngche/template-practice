@AGENTS.md

# 컴포넌트 작성 컨벤션 (프로젝트 전역, 위치 무관)

- 컴포넌트와 내부 보조 함수는 `function name() {}` 선언문으로 작성, `const name = () => {}` 대입 금지
  - 화살표 함수는 익명일 경우 `.name`이 비어 있어 React DevTools 컴포넌트 트리·Profiler·에러 스택에서 식별이 어려움. `function` 선언은 항상 이름을 가짐
  - 함수 선언은 호이스팅되므로 return/JSX를 위에 두고 이벤트 핸들러 등 보조 함수를 아래에 배치해도 무방
  - 예외: JSX props에 바로 넘기는 1회성 인라인 콜백(`onClick={() => setOpen(true)}` 등)은 이름이 필요 없으므로 화살표 함수 허용
- 컴포넌트는 기본적으로 Server Component. 상호작용(이벤트 핸들러, 훅)이 필요할 때만 파일 최상단에 "use client" 명시
- 스타일은 Tailwind 유틸리티 클래스만 사용, 별도 CSS 모듈/styled-components 금지
- 파일명은 PascalCase (예: Button.tsx), 폴더당 하나의 default export
- Props 타입은 컴포넌트 파일 내부에 인라인으로 정의, 공용 타입만 필요할 때 types.ts 분리
- `src/components`뿐 아니라 `src/app/**/_components` 같은 라우트 전용 private 폴더의 컴포넌트에도 동일하게 적용
