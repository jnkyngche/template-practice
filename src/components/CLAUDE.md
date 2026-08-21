# src/components 컨벤션

- 컴포넌트는 기본적으로 Server Component. 상호작용(이벤트 핸들러, 훅)이 필요할 때만 파일 최상단에 "use client" 명시
- 스타일은 Tailwind 유틸리티 클래스만 사용, 별도 CSS 모듈/styled-components 금지
- 파일명은 PascalCase (예: Button.tsx), 폴더당 하나의 default export
- Props 타입은 컴포넌트 파일 내부에 인라인으로 정의, 공용 타입만 필요할 때 types.ts 분리
- 함수 선언 스타일(`function name() {}` 등)은 프로젝트 전역 규칙이므로 루트 [CLAUDE.md](../../CLAUDE.md) 참고
