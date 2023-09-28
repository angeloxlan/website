# angelaguirre.dev

This project is my personal website to showcase my skills as a software developer.

## Getting Started

## Development

Do you want to run this project locally for development or testing purposes? 

First, install the project dendencies:

```sh
$ npm install
```

Then, start the development server by running the following command:

```sh
$ npm run dev
```

If everything goes well, you can see the project running by visiting [http://localhost:3000](http://localhost:3000) on your browser. (Nuxt default port is 3000).

## Deployment

This project is intended to use *Docker* container for deployment as well as *nginx* as a proxy pass server.

First, you need to create the Docker image for this project. Make sure you are in the project directory.

```sh
$ docker build -t projectimage .
```

> You can change *projectimage* for a different name.

Then, you need to start the app container by running the following command.

```sh
$ docker run -dp 3000:3000 --name mywebsite projectimage
```

> You can change *mywebsite* for a different name.

## Tech stack

This project was built using the following technologies.

* [Nuxt](https://nuxt.com/)
* [Tailwind CSS](https://tailwindcss.com/)

#

This project was made with ♥ by [Angel Aguirre (angelo)](https://twitter.com/angeloxlan)
