
# Kodkollektivet.se website
### http://api.kodkollektivet.se
#### The Rest API provides information about Kodkollektivet projects, members and related info.



Info

/info/

# ! This will be removed, dont use!!



Project

/project/

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



Contributor

/contributor/

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



Language

/language/

#### This endpoints returns all languages

Return

* "slug" : string
* "name" : string



Role

/role/

#### This endpoints returns all roles

Return

* "role" : string
* "slug" : string



Procon

/procon/

#### This endpoints returns all project <-> contributor relations

Return

* "project" : string
* "contributor" : string



Prolan

/prolan/

#### This endpoints returns all project <-> contributor relations

Return

* "project" : string
* "language" : string



Prorol

/prolan/

#### This endpoints returns all project <-> contributor <-> role relations

Return

* "project" : string
* "contributor" : string
* "role" : string