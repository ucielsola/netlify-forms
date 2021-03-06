<script context="module">
	export const prerender = true;
</script>

<script>
	const handleSubmit = (e) => {
		e.preventDefault();

		const form = document.querySelector('form');
		const formData = new FormData(form);

		function encode(data) {
			return Object.keys(data)
				.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
				.join('&');
		}

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': e.target.getAttribute('name'),
				...name
			})
		})
			.then(() => console.log("ok"))
			.catch((error) => alert(error));
	};
</script>

<header class="container">
	<h1>
		Hi! Let's test <a href="https://docs.netlify.com/forms/setup/" rel="noopener noreferrer"
			>Netlify Forms</a
		>
		with <a href="https://kit.svelte.dev" rel="noopener noreferrer">SvelteKit</a>
	</h1>
</header>

<main class="container">
	<section>
		<article>
			<p>
				So, if you read <a
					href="https://docs.netlify.com/forms/setup/"
					rel="noopener noreferrer"
					data-tooltip="Netlify Forms Docs.">Netlify Forms documentation</a
				>, you'll already know that <strong>HTML Forms</strong> are detected <em>automatically</em> by
				Netlify's bots at build time!
			</p>
			<p>
				We only need to use one attribute to make it work, and that is the <mark>netlify</mark> attr.,
				as you can see here:
			</p>
			<pre>
                &lt;form name="contact" method="POST" <mark>netlify</mark>&gt;
                    &lt;label&gt;Your Name: &lt;input type="text" name="name" /&gt;&lt;/label&gt;   
                    &lt;label&gt;Your Email: &lt;input type="email" name="email" /&gt;&lt;/label&gt;
                    &lt;label&gt;Your Message: &lt;textarea name="message" /&gt;&lt;/label&gt;
                &lt;/form&gt;
            </pre>
			<p>
				BUT! There is something very important here, if you are using <a
					href="https://kit.svelte.dev"
					rel="noopener noreferrer"
					data-tooltip="Visit SvelteKit Website">SvelteKit</a
				>, as it is an <mark>(amazing)</mark>
				<a
					href="https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38"
					rel="noopener noreferrer"
					data-tooltip="Excellent article on Medium">SSR JavaScript Framework</a
				>. This means that our beloved form, wont be accessible to Netlify's Bot.
			</p>
			<p>
				To sort this out, we can use the <strong>PreRender</strong> feature that comes with
				SvelteKit, setting our <em>svelte.config.js</em> like this:
			</p>
			<img
				src="https://i.postimg.cc/vBtn3z1Q/Net-Forms-1.png"
				alt="Code screenshot"
				class="container"
			/>
			<p>And then in our component:</p>
			<img
				src="https://i.postimg.cc/D0yKXvk2/net-form-2.png"
				alt="Code Screenshot"
				class="container"
			/>
		</article>
	</section>
    <section>
        <article>
            <p>Now, if you fill and submit the form bellow, I'll receive a notification from Netlify!</p>
        </article>
    </section>
	<section>
		<form class="container" netlify on:submit={(event) => handleSubmit(event)} name="test-form">
			<div class="grid">
				<label for="firstname">
					Your name
					<input type="text" id="firstname" name="firstname" required />
				</label>

				<label for="email">
					Your email
					<input type="email" id="email" name="email" required />
				</label>
			</div>

			<label for="message">Your message</label>
			<textarea id="message" name="message" />
			<small>(I'll never share your email with anyone else)</small>

			<button type="submit">Submit</button>
		</form>
	</section>
</main>
