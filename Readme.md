# Videos Packtpub

- https://subscription.packtpub.com/video/web_development/9781800206274/p2/video2_4/-database-setup-locally

## Setup mongo
Within the Mongo-Shell as Admin
````
> use SEOBlog
switched to db SEOBlog
> use admin
switched to db admin
> db.createUser(
...   {
...     user: "seoblog",
...     pwd: "seoblog",
...     roles: [
...        { role: "readWrite", db: "seoblog" }
...      ]
...   }
... )
````
