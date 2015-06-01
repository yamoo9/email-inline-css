'use strict';

/**
 * --------------------------------
 * Modules
 * --------------------------------
 */
var gulp       = require('gulp'),
	inlineCss  = require('gulp-inline-css'),
	cheerio    = require('gulp-cheerio'),

/**
 * Options
 * --------------------------------
 */
	path = {
		src: './src/**/*.html',
		out: 'build/'
	},

	options = {
		inlineCss: {
			applyStyleTags : true,
			applyLinkTags  : true,
			removeStyleTags: true,
			removeLinkTags : true
		},
		remove: {
			// 지우고자 하는 요소의 선택자를 입력
			el: '*',
			// 지우고자 하는 속성을 배열 아이템으로 설정
			attrs: ['id', 'class']
		}
	};

/**
 * --------------------------------
 * Tasks
 * --------------------------------
 */
gulp.task('default', ['email', 'watch']);

gulp.task('watch', function() {
	gulp.watch(path.src, ['email']);
});

gulp.task('email', function() {
	return gulp.src(path.src)
	.pipe( inlineCss(options.inlineCss) )
	.pipe( cheerio(function ($, file) {
		$(options.remove.el).each(function() {
			var _el = $(this);
			options.remove.attrs.forEach(function(item, index) {
				_el.removeAttr(item);
			});
		})
	}) )
	.pipe( gulp.dest(path.out) );
});