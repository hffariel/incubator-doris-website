(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{487:function(e,t,n){"use strict";n.r(t);var a=n(33),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"doris-on-es"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#doris-on-es"}},[e._v("#")]),e._v(" Doris On ES")]),e._v(" "),n("p",[e._v("Doris-On-ES combines Doris's distributed query planning capability with ES (Elastic search)'s full-text search capability to provide a more complete OLAP scenario solution:")]),e._v(" "),n("ol",[n("li",[e._v("Multi-index Distributed Join Query in ES")]),e._v(" "),n("li",[e._v("Joint Query of Tables in Doris and ES, More Complex Full-Text Retrieval and Filtering")]),e._v(" "),n("li",[e._v("Aggregated queries for fields of ES keyword type: suitable for frequent changes in index, tens of millions or more of single fragmented documents, and the cardinality of the field is very large")])]),e._v(" "),n("p",[e._v("This document mainly introduces the realization principle and usage of this function.")]),e._v(" "),n("h2",{attrs:{id:"noun-interpretation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),n("ul",[n("li",[e._v("FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access.")]),e._v(" "),n("li",[e._v("BE: Backend, Doris's back-end node. Responsible for query execution and data storage.")]),e._v(" "),n("li",[e._v("Elastic search (ES): The most popular open source distributed search engine.")]),e._v(" "),n("li",[e._v("DataNode: The data storage and computing node of ES.")]),e._v(" "),n("li",[e._v("MasterNode: The Master node of ES, which manages metadata, nodes, data distribution, etc.")]),e._v(" "),n("li",[e._v("scroll: The built-in data set cursor feature of ES for streaming scanning and filtering of data.")])]),e._v(" "),n("h2",{attrs:{id:"how-to-use-it"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-it"}},[e._v("#")]),e._v(" How to use it")]),e._v(" "),n("h3",{attrs:{id:"create-appearance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-appearance"}},[e._v("#")]),e._v(" Create appearance")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('CREATE EXTERNAL TABLE `es_table` (\n  `id` bigint(20) COMMENT "",\n  `k1` bigint(20) COMMENT "",\n  `k2` datetime COMMENT "",\n  `k3` varchar(20) COMMENT "",\n  `k4` varchar(100) COMMENT "",\n  `k5` float COMMENT ""\n) ENGINE=ELASTICSEARCH\nPARTITION BY RANGE(`id`)\n()\nPROPERTIES (\n"hosts" = "http://192.168.0.1:8200,http://192.168.0.2:8200",\n"user" = "root",\n"password" = "root",\n"index" = "tindex”,\n"type" = "doc"\n);\n')])])]),n("p",[e._v("Description of parameters:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Parameter")]),e._v(" "),n("th",[e._v("description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("Hosts")]),e._v(" "),n("td",[e._v("ES Cluster Connection Address, which can specify one or more, through which Doris obtains the share distribution information of ES version number and index")])]),e._v(" "),n("tr",[n("td",[e._v("User")]),e._v(" "),n("td",[e._v("Open the user name of the ES cluster authenticated by basic, you need to ensure that the user has access to: / cluster / state / nodes / HTTP and other path permissions and read permissions for index")])]),e._v(" "),n("tr",[n("td",[e._v("Password")]),e._v(" "),n("td",[e._v("corresponding user's password information")])]),e._v(" "),n("tr",[n("td",[e._v("The index name of the ES corresponding to the table in index")]),e._v(" "),n("td",[e._v("Doris can be alias")])]),e._v(" "),n("tr",[n("td",[e._v("Type")]),e._v(" "),n("td",[e._v("Specifies the type of index, defaulting to _doc")])]),e._v(" "),n("tr",[n("td",[e._v("Transport")]),e._v(" "),n("td",[e._v("Internal reservation, default to http")])])])]),e._v(" "),n("h3",{attrs:{id:"query"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[e._v("#")]),e._v(" Query")]),e._v(" "),n("h4",{attrs:{id:"basic-conditions-filtration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-conditions-filtration"}},[e._v("#")]),e._v(" Basic Conditions Filtration")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("select * from es_table where k1 > 1000 and k3 ='term' or k4 like 'fu*z_'\n")])])]),n("h4",{attrs:{id:"extended-esquery-sql-grammar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#extended-esquery-sql-grammar"}},[e._v("#")]),e._v(" Extended esquery SQL grammar")]),e._v(" "),n("p",[e._v("The first column name parameter of "),n("code",[e._v("esquery")]),e._v(" is used to associate "),n("code",[e._v("index")]),e._v(", the second parameter is the JSON expression of the basic "),n("code",[e._v("Query DSL")]),e._v(", and the curly bracket "),n("code",[e._v("{}")]),e._v(" is used to include "),n("code",[e._v("root")]),e._v(" of json. There is and can only be one key of json, such as mat. Ch, geo_shape, bool, etc.")]),e._v(" "),n("p",[e._v("Match query:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('select * from es_table where esquery(k4, \'{\n        "match": {\n           "k4": "doris on elasticsearch"\n        }\n    }\');\n')])])]),n("p",[e._v("Geo related queries:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('select * from es_table where esquery(k4, \'{\n      "geo_shape": {\n         "location": {\n            "shape": {\n               "type": "envelope",\n               "coordinates": [\n                  [\n                     13,\n                     53\n                  ],\n                  [\n                     14,\n                     52\n                  ]\n               ]\n            },\n            "relation": "within"\n         }\n      }\n   }\');\n')])])]),n("p",[e._v("Bool query:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('select * from es_table where esquery(k4, \' {\n         "bool": {\n            "must": [\n               {\n                  "terms": {\n                     "k1": [\n                        11,\n                        12\n                     ]\n                  }\n               },\n               {\n                  "terms": {\n                     "k2": [\n                        100\n                     ]\n                  }\n               }\n            ]\n         }\n      }\');\n')])])]),n("h2",{attrs:{id:"principle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("+----------------------------------------------+\n|                                              |\n| Doris      +------------------+              |\n|            |       FE         +--------------+-------+\n|            |                  |  Request Shard Location\n|            +--+-------------+-+              |       |\n|               ^             ^                |       |\n|               |             |                |       |\n|  +-------------------+ +------------------+  |       |\n|  |            |      | |    |             |  |       |\n|  | +----------+----+ | | +--+-----------+ |  |       |\n|  | |      BE       | | | |      BE      | |  |       |\n|  | +---------------+ | | +--------------+ |  |       |\n+----------------------------------------------+       |\n   |        |          | |        |         |          |\n   |        |          | |        |         |          |\n   |    HTTP SCROLL    | |    HTTP SCROLL   |          |\n+-----------+---------------------+------------+       |\n|  |        v          | |        v         |  |       |\n|  | +------+--------+ | | +------+-------+ |  |       |\n|  | |               | | | |              | |  |       |\n|  | |   DataNode    | | | |   DataNode   +<-----------+\n|  | |               | | | |              | |  |       |\n|  | |               +<--------------------------------+\n|  | +---------------+ | | |--------------| |  |       |\n|  +-------------------+ +------------------+  |       |\n|   Same Physical Node                         |       |\n|                                              |       |\n|           +-----------------------+          |       |\n|           |                       |          |       |\n|           |      MasterNode       +<-----------------+\n| ES        |                       |          |\n|           +-----------------------+          |\n+----------------------------------------------+\n\n\n")])])]),n("ol",[n("li",[n("p",[e._v("After the ES appearance is created, FE requests the host specified by the table to obtain HTTP port information of all nodes and share distribution information of index. If the request fails, it will traverse the host list sequentially until it succeeds or fails completely.")])]),e._v(" "),n("li",[n("p",[e._v("When querying, the query plan will be generated and sent to the corresponding BE node according to some node information obtained by FE and metadata information of index.")])]),e._v(" "),n("li",[n("p",[e._v("The BE node requests locally deployed ES nodes in accordance with the "),n("code",[e._v("proximity principle")]),e._v(". The BE receives data concurrently from each fragment of ES index in the "),n("code",[e._v("HTTP Scroll")]),e._v(" mode.")])]),e._v(" "),n("li",[n("p",[e._v("After calculating the result, return it to client")])])]),e._v(" "),n("h2",{attrs:{id:"push-down-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#push-down-operations"}},[e._v("#")]),e._v(" Push-Down operations")]),e._v(" "),n("p",[e._v("An important function of "),n("code",[e._v("Doris On Elastic")]),e._v(" search is to push down filtering conditions: push ES under filtering conditions, so that only data that really meets the conditions can be returned, which can significantly improve query performance and reduce the CPU, memory and IO utilization of Doris and Elastic search.")]),e._v(" "),n("p",[e._v("The following operators are optimized to push down filters as follows:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("SQL syntax")]),e._v(" "),n("th",{staticStyle:{"text-align":"center"}},[e._v("ES 5.x+ syntax")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("=")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("term query")])]),e._v(" "),n("tr",[n("td",[e._v("in")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("terms query")])]),e._v(" "),n("tr",[n("td",[e._v("> , < , >= , ⇐")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("range")])]),e._v(" "),n("tr",[n("td",[e._v("and")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("bool.filter")])]),e._v(" "),n("tr",[n("td",[e._v("or")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("bool.should")])]),e._v(" "),n("tr",[n("td",[e._v("not")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("bool.must_not")])]),e._v(" "),n("tr",[n("td",[e._v("not in")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("bool.must_not + terms")])]),e._v(" "),n("tr",[n("td",[e._v("esquery")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("ES Query DSL")])])])]),e._v(" "),n("h2",{attrs:{id:"other-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#other-notes"}},[e._v("#")]),e._v(" Other notes")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("ES Version Requirements")]),e._v(" "),n("p",[e._v("The main version of ES is larger than 5. The scanning mode of ES data before 2. X and after 5. x is different. At present, the scanning mode of ES data after 5. x is supported.")])]),e._v(" "),n("li",[n("p",[e._v("Does ES Cluster Support X-Pack Authentication")]),e._v(" "),n("p",[e._v("Support all ES clusters using HTTP Basic authentication")])]),e._v(" "),n("li",[n("p",[e._v("Some queries are much slower than requesting ES")]),e._v(" "),n("p",[e._v("Yes, for example, query related to _count, etc., the ES internal will directly read the number of documents that meet the requirements of the relevant metadata, without the need to filter the real data.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);