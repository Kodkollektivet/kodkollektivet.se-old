
# Kodkollektivet.se API description
### http://api.kodkollektivet.se
#### The Rest API provides information about Kodkollektivet projects, members and related info.



# Info

/info/

### ! This will be removed, dont use!!





# /project/

### Project
#### This endpoint returns a pagination object.
#### In the results list is the project objects.

Returns

* "count" : int
* "next" : link to next pagination page
* "previous" : link to previous pagination page
* "results" : list of projects
  * "slug" : string
  * "name" : string
  * "about" : string
  * "gh_name" : string
  * "gh_id" : int
  * "gh_url" : string





# /contributor/

### Contributor

#### This endpoints returns all contributors

Return

* "slug" : string
* "name" : string
* "email" : string
* "website" : string
* "about" : string
* "gh_login" : string
* "gh_url" : string
* "gh_html" : string





# /language/

### Language

#### This endpoints returns all languages

Return

* "slug" : string
* "name" : string





# /role/

### Role

#### This endpoints returns all roles

Return

* "role" : string
* "slug" : string





# /procon/

### Procon

#### This endpoints returns all project <-> contributor relations

Return

* "project" : string
* "contributor" : string





# /prolan/

### Prolan

#### This endpoints returns all project <-> contributor relations

Return

* "project" : string
* "language" : string





# /prolan/

### Prorol

#### This endpoints returns all project <-> contributor <-> role relations

Return

* "project" : string
* "contributor" : string
* "role" : string