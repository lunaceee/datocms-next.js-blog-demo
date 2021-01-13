# Mochi diary | 麻薯日志 ｜ Diario de Mochi

## A multi-lingual blog site based on [nextjs-demo](https://github.com/datocms/nextjs-demo/tree/master)

![logo](./logo.png)

## How to use

### Local setup

Once the setup of the project and repo is done, clone the repo locally.

#### Set up environment variables

In your DatoCMS' project, go to the **Settings** menu at the top and click **API tokens**.

Then click **Read-only API token** and copy the token.

Next, copy the `.env.example` file in this directory to `.env` (which will be ignored by Git):

```bash
cp .env.example .env
```

Then set each variable on `.env`:

- `NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN` should be the API token you just copied.
- `NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET` can be any random string (but avoid spaces), like `MY_SECRET` - this is used for [the Preview Mode](/docs/advanced-features/preview-mode.md).

Your `.env` file should look like this:

```bash
NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN=...
NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET=...
```

#### Run your project locally

```bash
npm install
npm run dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)!

#### Try preview mode

On DatoCMS, go to one of the posts you've created and:

- **Update the title**. For example, you can add `[Draft]` in front of the title.
- Click **Save**, but **DO NOT** click **Publish**. By doing this, the post will be in the draft state.

(If it doesn't become draft, you need to go to the model settings for `Post`, go to **Additional Settings**, and turn on **Enable draft/published system**.)

Now, if you go to the post page on localhost, you won't see the updated title. However, if you use the **Preview Mode**, you'll be able to see the change

To enable the Preview Mode, go to this URL:

```
http://localhost:3000/api/preview?secret=<secret>
```

- `<secret>` should be the string you entered for `NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET`.
- `<slug>` should be the post's `slug` attribute (you can check on DatoCMS).

You should now be able to see the updated title. To exit the preview mode, you can click **Click here to exit preview mode** at the top.