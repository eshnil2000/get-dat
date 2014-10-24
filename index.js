var url = require('url')
var querystring = require('querystring')
var adventureTime = require('adventure-time')

var production = !location.port // a bit hackish but assume production if no custom port
var qs = url.parse(window.location.href, true).query

var opts = {
  guide: 'guide/',
  console: 'terminal.html',
  server: qs.server || (production ? 'try-dat.com' : 'dev.try-dat.com:8080'),
  id: qs.id || Math.random().toString(36).slice(2)
}

if (!qs.server) qs.server = opts.server
if (!qs.id) qs.id = opts.id 

opts.console += '?'+querystring.stringify(qs)

var adventure = adventureTime(opts)
