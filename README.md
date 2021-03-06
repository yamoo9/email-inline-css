### 이메일(Email) 디자인을 위한 인라인 CSS 자동 처리 프로세스

외부 `<link>` 요소 또는 `<style></style>`에 적용된 스타일 코드를
각각의 HTML 요소에 인라인 스타일로 적용한 후, `<link>` 요소 또는 `<style></style>`는 제거합니다.
뿐만 아니라 인라인으로 처리되어 불필요해진 각 요소의 `id`, `class` 속성 또한 제거됩니다.

```sh
$ gulp email # 단일 프로세스 처리
$ gulp       # 지속적 관찰 업무 추가
```

-

### 이메일 클라이언트에서 지원하는 CSS 스타일 확인

- [email-standards.org](http://www.email-standards.org/)
- [The Ultimate Guide to CSS](https://www.campaignmonitor.com/css/)
- [About HTML Email](http://kb.mailchimp.com/campaigns/ways-to-build/how-to-code-html-emails)
- [Understanding Gmail and CSS](https://litmus.com/blog/understanding-gmail-and-css-part-1)
- [처음 시작하는 이들을 위한 이메일 디자인 베스트 예제 & 리소스 20](http://cafe.naver.com/webstandardproject/345)

---

### 결론
이메일 디자인을 위해서는 테이블 레이아웃 및 이미지 폰트(디자이너가 원하는 글꼴 사용시)를 사용해야만 합니다.