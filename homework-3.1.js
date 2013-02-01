module.exports = function(grunt)
{
    grunt.initConfig(
        {
		pkg: '<json:package.json>',
		meta: 
        {
			banner: '/*!=========================================================\n' +
				'* <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("m/d/yyyy") %>\n' +
                '* <%= pkg.homepage %>\n' +
                '* HEAVILY based off bootstrap-modal.js\n'+
                '* ==========================================================\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              	'*\n' +
                '* Licensed under the Apache License, Version 2.0 (the "License");\n' +
				'* you may not use this file except in compliance with the License.\n' +
				'* You may obtain a copy of the License at\n' +
				'*\n' +
				'* http://www.apache.org/licenses/LICENSE-2.0\n' +
				'*\n' +
				'* Unless required by applicable law or agreed to in writing, software\n' +
				'* distributed under the License is distributed on an "AS IS" BASIS,\n' +
				'* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n' +
				'* See the License for the specific language governing permissions and\n' +
				'* limitations under the License.\n' +
				'* ========================================================= */\n'
		},
        
		lint: 
        { 
			all: ['js/*.js']    
		},
        
		jshint: 
        { 
			options: 
            {
				"validthis": true,
				"laxbreak" : true,
				"browser"  : true,
				"eqnull"   : true,
				"boss"     : true,
				"expr"     : true,
				"asi"      : true
			},
			globals: 
            {
				"jQuery"   : true
			}  
		},
        
		concat: 
        {
            js: 
            {
				src: ['<banner>', '<file_strip_banner:js/bootstrap-lightbox.js>'],
				dest: 'build/bootstrap-lightbox.js'
			},
			less: 
            {
				src: ['<banner>', '<file_strip_banner:less/bootstrap-lightbox.less>'],
				dest: 'build/bootstrap-lightbox.less'
			}
		},
        
		min: 
        {
			dist: 
            {
				src: ['<banner>', '<file_strip_banner:js/bootstrap-lightbox.js>'],
				dest: 'build/bootstrap-lightbox.min.js'
			}
		},
        
		less: 
        {
			"dist": 
            {
				options: 
                {
					paths: [
						"build",
						"less"
					]
				},
				files: {
					"build/bootstrap-lightbox.css" : "build/bootstrap-lightbox.less"
				}
			},
			"distmin": 
            {
				options: 
                {
					paths: [
						"build",
						"less"
					],
					yuicompress: true
				},
				files: 
                {
					"build/bootstrap-lightbox.min.css" : "build/bootstrap-lightbox.less"
				}
			}
		},
        
		clean: 
        {
			dist: [
				"build/bootstrap-lightbox.less"
			]
		},
        
		copy: 
        {
			dist: 
            {
				files: 
                {
					"docs/assets/js/": "build/bootstrap-lightbox.min.js",
					"docs/assets/css/": "build/bootstrap-lightbox.min.css",
				}
			}
		},
        
		exec: 
        {
			docs_dep: 
            {
				command: 'cd docs/build;npm install'
			},
			build_docs: 
            {
				command: 'node docs/build'
			}
		},
        
		qunit: 
        {
			all: [
				'test/**.html'
			]
		}
	});

	
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-exec');

	// Default task.
	grunt.registerTask('default', 'qunit lint concat min less copy');

	grunt.registerTask('docs', 'exec:docs_dep exec:build_docs');

	grunt.registerTask('test', 'qunit lint');

};

'Adding another file to clean up'
var net = require('net'),
    express = require('express'),
    app = express()
    server = require('http').createServer(app),
    io = require('socket.io').listen(server)

app.use(express.static(__dirname))

io.sockets.on('connection', function (client) 
    {
    var chat = net.connect(1234)
    chat.on('data', function(data)
            {
            client.send(data)
            }
    )

    client.on('message', function (msg) 
    {
        chat.write(msg)
    }).on('disconnect', function() 
        {
        chat.end()
        }
    )
    
    }
)

server.listen(8088)
console.log('server running on http://localhost:8088')


'Adding yet another file to clean up!!'
<script>
if (typeof console == "undefined") console = {log:function(){}};
var application = {
itemList:null,
reportInfo:[],
reportPages:[],
searchForm:null,
init:function(){
    
    PackageLoader.setContentDestination(document.getElementById("prototypeNodes"));
    //expander
    var expander = document.getElementById("leftcolumn_expander");
    expander.onclick = function(){
    var container = document.getElementById("container");
    container.className = (container.className == "leftcolumncollapse")? "" : "leftcolumncollapse";
    
}
//load reportInfo
var xm = new SPXMLManager();
xm.add("reports", "/sites/inventory/dataanalytics/", "44998D87-4B06-4278-93FA-37ED51A86A6E", {View:"AFFF95F9-773E-4605-9989-AAF62AFE19D2"});
xm.request({names:null, oncomplete:this.reportInfoLoaded, oncompleteScope:this});
},

setReport:function(reportID){
    var reportInfo = this.reportInfo[reportID];
    if (!reportInfo) return;
    var maincolumn = document.getElementById("maincolumn");
    for (var r in this.reportPages) this.reportPages[r].element.style.display = "none";
    var reportPage = this.reportPages[reportInfo.ID];
    
    if (!reportPage){
    
        reportPage = new ReportPage(reportInfo);
        this.reportPages[reportInfo.ID] = reportPage;
        maincolumn.appendChild(reportPage.element);
    }
    
    reportPage.element.style.display = "";
    window.location.hash = reportInfo.ID;
    },
    restoreFromHash:function(){
    var hash = window.location.hash.substr(1);
    if (!Number(hash)) return;
    this.setReport(hash);
    this.itemList.setCurrentItem(hash);
    },
    //handlers
    reportInfoLoaded:function(e){
    //reportInfo
    var isDev = Boolean(String(window.location).match(/\/dev\//));
    var reports = e.data.reports.array;
    for (var r in reports) if (reports[r].Active || isDev) this.reportInfo[reports[r].ID] = reports[r];
    //itemList
    this.itemList = new ItemList(this);
    this.itemList.setOptions({idField:"ID", groupField:"Group", sortField:"Title"});
    this.itemList.setData(this.reportInfo);
    this.itemList.addEventListener("change", this.itemListChanged);
    document.getElementById("leftcolumn_list").appendChild(this.itemList.element);
    //searchForm
    this.searchForm = new FormController(document.getElementById("leftcolumn_controls"), this);
    this.searchForm.addEventListener("change", this.searchFormChanged);
    //
    window.onhashchange = function(){ application.restoreFromHash(); };
    this.restoreFromHash();
    },
    itemListChanged:function(e){
    this.controller.setReport(e.data.ID);
    },
    searchFormChanged:function(e){
    this.controller.itemList.setOptions({searchString:this.getData().searchString});
    }
    };

function ReportPage(reportInfo){
    this.init(reportInfo);
}

ReportPage.prototype = {
    reportInfo:null,
    element:null,
    childElements:null,
    init:function(reportInfo){
    this.reportInfo = reportInfo;
    this.element = document.getElementById("reportPageNode").cloneNode(true);
    this.element.id = "";
    this.childElements = getNamedElements(this.element);
    this.childElements.groupName.innerHTML = reportInfo.Group;
    this.childElements.reportTitle.innerHTML = reportInfo.Title;
    
    if (reportInfo.Description){
        this.childElements.descriptionText.innerHTML = reportInfo.Description;
        this.childElements.descriptionButton.onclick = this.descriptionButtonClicked;
        this.childElements.descriptionButton.controller = this;
    }
    else this.childElements.description.style.display = "none";
        PackageLoader.load({url:reportInfo.ReportPackage+".html", oncomplete:this.packageLoaded, oncompleteScope:this});
    },
    packageLoaded:function(e){
        var reportObject = window[this.reportInfo.ReportObject];
        if (!reportObject){
            this.childElements.content.innerHTML = "<div class='report'>Oops! Part of the page seems to be missing. (" + this.reportInfo.ReportObject + ")</div>";
            return;
    }
    
    reportObject.init();
    this.childElements.content.appendChild(reportObject.element);
    },
    descriptionButtonClicked:function(e){
        var d = this.controller.childElements.description;
        d.className = (d.className.match("collapsed"))? d.className.replace(/\s?collapsed/, "") : d.className += " collapsed";
        //
        this.controller.childElements.descriptionTextContainer.style.height = (d.className.match("collapsed"))? "0px" : this.controller.childElements.descriptionText.clientHeight + "px";
    }
}

var PackageLoader = {
packages:[], //{url, iframe, requests, loaded}
contentDestination:document.body,
//public
load:function(request){ //{url, oncomplete, oncompleteScope}
var pkg = this.packages[arrayIndexOf(this.packages, request.url, "url")];
if (!pkg){
pkg = {url:request.url, requests:[request], loaded:false};
this.packages.push(pkg);
pkg.iframe = document.createElement("iframe");
pkg.iframe.controller = this;
pkg.iframe.style.display = "none";
pkg.iframe.src = pkg.url;
document.body.appendChild(pkg.iframe);
if (pkg.iframe.readyState) pkg.iframe.onreadystatechange = function(){ if (this.readyState == "complete") this.controller.unloadPackage(this); }
else pkg.iframe.contentWindow.onload = function(){ this.frameElement.controller.unloadPackage(this.frameElement); }
}
else{
if (!pkg.loaded) pkg.requests.push(request);
else this.completeRequest(request);
}
},
setContentDestination:function(element){
this.contentDestination = element;
},
//private
unloadPackage:function(iframe){
//move styles, scripts, and content from loaded iframe to document
var styles = iframe.contentWindow.document.getElementsByTagName("style");
for (var s = 0; s < styles.length; s++) document.getElementsByTagName("head")[0].appendChild(styles[s]);
var scripts = iframe.contentWindow.document.getElementsByTagName("script");
for (var s = 0; s < scripts.length; s++){
var script = document.createElement("script");
script.text = scripts[s].text;
document.body.appendChild(script);
}
for (var c = 0; c < iframe.contentWindow.document.body.childNodes.length; c++){
var node = iframe.contentWindow.document.body.childNodes[c];
if (node.nodeType == 1 && node.tagName.toLowerCase() == "div") this.contentDestination.appendChild(node.cloneNode(true));
}
document.body.removeChild(iframe);
//end package requests
var pkg = this.packages[arrayIndexOf(this.packages, iframe, "iframe")];
pkg.loaded = true;
pkg.iframe = null;
for (var r in pkg.requests) this.completeRequest(pkg.requests[r]);
},
completeRequest:function(request){
request.oncomplete.call(request.oncompleteScope, {request:request});
}
}
//
window.onload = function(){application.init();};
</script> 