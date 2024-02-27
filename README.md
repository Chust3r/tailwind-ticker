#### Package install

> Install the package with your favorite package manager:

-  npm

```bash
npm install tailwind-ticker
```

-  pnpm

```bash
pnpm install tailwind-ticker
```

-  yarn

```bash
yarn add tailwind-ticker
```

#### Plugin Implementation

> Use the plugin in your Tailwind CSS project:

```js
// tailwind.config.mjs
import ticker from 'tailwind-ticker'

export default {
	// rest of the options
	plugins: [ticker],
}
```

#### Example

> Here are some simple examples of how to use this plugin and its animations:

#### Horizontal

```html
<div class="ticker ticker-mask-x my-20 max-w-2xl mx-auto *:hover:animate-pause">
	<div
		class="ticker-wrapper animate-ticker-left animate-duration-[40s] *:mx-7 items-center"
	>
		<Dev class="h-24" />
		<Roblox class="h-12" />
		<Hulo class="h-12" />
		<Ngrok class="h-20" />
		<Voicedmod class="h-12" />
	</div>
	<div
		class="ticker-wrapper animate-ticker-left animate-duration-[40s] *:mx-7 items-center"
	>
		<Dev class="h-24" />
		<Roblox class="h-12" />
		<Hulo class="h-12" />
		<Ngrok class="h-20" />
		<Voicedmod class="h-12" />
	</div>
</div>
```

#### Vertical

```html
<div
	class="ticker-y ticker-mask-y h-52 mx-auto *:hover:animate-pause w-fit my-5"
>
	<div
		class="ticker-wrapper-y animate-ticker-top animate-duration-[20s] flex justify-center *:my-3"
	>
		<AstroIcon class="h-20" />
		<Express class="h-14" />
		<Remix class="h-14" />
		<Flask class="h-20" />
		<Elysia class="h-20" />
	</div>
	<div
		class="ticker-wrapper-y animate-ticker-top animate-duration-[20s] flex justify-center *:my-3"
	>
		<AstroIcon class="h-20" />
		<Express class="h-14" />
		<Remix class="h-14" />
		<Flask class="h-20" />
		<Elysia class="h-20" />
	</div>
</div>
```

| utility class                 | description                                |
| ----------------------------- | ------------------------------------------ |
| `ticker`                      | root element ticker (axis x)               |
| `ticker-y`                    | root element ticker (axis y)               |
| `ticker-wrapper`              | wrapper for elements ticker (axis x)       |
| `ticker-warpper-y`            | wrapper for elements ticker (axis y)       |
| `ticker-mask-x`               | add mask to ticker (axis x)                |
| `ticker-mask-y`               | add mask to ticker (axis y)                |
| `ticker-animate-[right/left]` | animation to ticker (axis x) right or left |
| `ticker-animate-[top/bottom]` | animation to ticker (axis y) top or bottom |
