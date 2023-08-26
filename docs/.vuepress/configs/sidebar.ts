import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh : SidebarConfig = {
	'/zh/guide/': [
		{
			text: '指南',
			children: [
				'/zh/guide/README.md',
				'/zh/guide/getting-started.md',
				'/zh/guide/contributing.md',
				'/zh/guide/markdown.md',
			],
		},
	],
	'/zh/ai/': [
		{
			text: '人工智能',
			children: [
				'/zh/ai/README.md',
				'/zh/ai/architecture.md',
			],
		}
	],
	'/zh/devtools/': [
		{
			text: '开发工具',
			children: [
				'/zh/devtools/architecture.md',
				'/zh/devtools/plugin.md',
			],
		}
	],
	'/zh/embedded/': [
		{
			text: '嵌入式',
			children: [
				'/zh/embedded/README.md',
				'/zh/embedded/rk3588.md',
			],
		}
	],
	'/zh/deployment/': [
		{
			text: '部署运维',
			children: [
				'/zh/deployment/README.md',
				'/zh/deployment/docker.md',
			],
		}
	],
	'/zh/development/': [
		{
			text: '软件开发',
			collapsible: false,
			children: [
				'/zh/development/README.md',
				'/zh/development/uml.md',
				'/zh/development/designpatterns.md',
			],
		}
	],
}