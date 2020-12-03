(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{513:function(t,r,a){"use strict";a.r(r);var v=a(14),s=Object(v.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tinydvr-小巧身材-满载动力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tinydvr-小巧身材-满载动力"}},[t._v("#")]),t._v(" TinyDVR - 小巧身材，满载动力")]),t._v(" "),a("p",[t._v("—— 基于 TinyDVR master V1.1 & Slave V7.2 Release")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200125191345.jpg",alt:""}})]),t._v(" "),a("p",[t._v("TinyDVR 是一款电机驱动套件，包含母板（master）与子板（Slave），供电部分与驱动部分分离，相比前身 ZenDriver 大幅度缩减了体积，极大提升了可拓展性。你可以根据自己的需求，堆叠不同数量的子板，驱动 n 个电机。")]),t._v(" "),a("h2",{attrs:{id:"基本参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本参数"}},[t._v("#")]),t._v(" 基本参数")]),t._v(" "),a("ol",[a("li",[t._v("输入电压："),a("strong",[t._v("7.2 ~ 20 V")])]),t._v(" "),a("li",[t._v("输出电流："),a("strong",[t._v("0 ~ 68 A")])]),t._v(" "),a("li",[t._v("提供 "),a("strong",[t._v("5V / 3A")]),t._v(" 的电源输出，可供控制器及其他模块使用")]),t._v(" "),a("li",[t._v("保护装置：集成防反接、光耦隔离电路")]),t._v(" "),a("li",[t._v("电机简便接插：对市面上通用的直流减速电机（带编码器），可直接用 6 pin 排线接插（免对线）")]),t._v(" "),a("li",[t._v("可拓展：一块母板可堆叠 n 块子板，实现 n 路电机驱动")])]),t._v(" "),a("h2",{attrs:{id:"接口定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口定义"}},[t._v("#")]),t._v(" 接口定义")]),t._v(" "),a("h3",{attrs:{id:"tinydvr-master"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tinydvr-master"}},[t._v("#")]),t._v(" TinyDVR master")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200125191439.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"tinydvr-slave"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tinydvr-slave"}},[t._v("#")]),t._v(" TinyDVR Slave")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200125191457.png",alt:""}})]),t._v(" "),a("p",[t._v("背面引脚详解：")]),t._v(" "),a("ul",[a("li",[t._v("+ ：提供 5V / 3A 的电源输出")]),t._v(" "),a("li",[t._v("1 ：IN1 端口，输入 PWM 信号 1")]),t._v(" "),a("li",[t._v("2 ：IN2 端口，输入 PWM 信号 2")]),t._v(" "),a("li",[t._v("A : 编码器 A 相信号端口")]),t._v(" "),a("li",[t._v("B : 编码器 B 相信号端口")]),t._v(" "),a("li",[t._v("- ：GND")])]),t._v(" "),a("h2",{attrs:{id:"使用指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用指南"}},[t._v("#")]),t._v(" 使用指南")]),t._v(" "),a("h3",{attrs:{id:"测试方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试方法"}},[t._v("#")]),t._v(" 测试方法")]),t._v(" "),a("ol",[a("li",[t._v("接入 "),a("strong",[t._v("7.2 ~ 20 V")]),t._v(" 电池供电")]),t._v(" "),a("li",[t._v("在对应的子板处接上电机")]),t._v(" "),a("li",[t._v("用 "),a("strong",[t._v("5V")]),t._v(" 供电口分别接 "),a("strong",[t._v("IN1/ IN2")]),t._v(" 端口，此时电机将 "),a("strong",[t._v("正 / 反转")])])]),t._v(" "),a("h3",{attrs:{id:"连接单片机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接单片机"}},[t._v("#")]),t._v(" 连接单片机")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("接入 "),a("strong",[t._v("7.2 ~ 20 V")]),t._v(" 电池供电")]),t._v(" "),a("li",[t._v("在对应的子板处接上电机")]),t._v(" "),a("li",[t._v("共地（驱动板 GND 接单片机 GND）")]),t._v(" "),a("li",[t._v("IN1，IN2 端口接单片机对应 PWM 端口（代码内设置）")]),t._v(" "),a("li",[t._v("用代码调试：请见 Github 仓库 "),a("a",{attrs:{href:"https://github.com/linyuxuanlin/TinyDVR",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("linyuxuanlin/TinyDVR")]),a("OutboundLink")],1),t._v(" 内的测试例程")])]),t._v(" "),a("h2",{attrs:{id:"花絮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#花絮"}},[t._v("#")]),t._v(" 花絮")]),t._v(" "),a("p",[t._v("早期子板：\n"),a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200311182442.jpg",alt:""}})]),t._v(" "),a("p",[t._v("批量焊接：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200311182441.jpg",alt:""}})]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("blockquote",[a("p",[t._v("文章作者："),a("strong",[t._v("Power Lin")]),a("br"),t._v("\n原文地址："),a("a",{attrs:{href:"https://http://joycekirkland.site/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://http://joycekirkland.site/"),a("OutboundLink")],1),a("br"),t._v("\n版权声明：文章采用 "),a("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),a("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);r.default=s.exports}}]);