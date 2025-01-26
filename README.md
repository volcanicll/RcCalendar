# @volcanicll/react-calendar

一个简单易用的 React 日历组件。

## 安装

```bash
npm install @volcanicll/react-calendar
# 或
yarn add @volcanicll/react-calendar
```

## 使用方法

```jsx
import { Calendar } from "@volcanicll/react-calendar";
import "@volcanicll/react-calendar/dist/style.css"; // 导入样式

function App() {
  return <Calendar />;
}
```

## 特性

- 支持日期选择
- 支持自定义样式
- 轻量级
- TypeScript 支持

## API

| 属性     | 说明                 | 类型                   | 默认值 |
| -------- | -------------------- | ---------------------- | ------ |
| value    | 当前选中的日期       | `Date`                 | -      |
| onChange | 日期变化时的回调函数 | `(date: Date) => void` | -      |

## 开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 运行测试
npm test
```

## License

MIT
