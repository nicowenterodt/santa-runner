var e=function(e){var t={target:"confetti-holder",max:80,size:1,animate:!0,respawn:!0,props:["circle","square","triangle","line"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:25,interval:null,rotate:!1,start_from_edge:!1,width:window.innerWidth,height:window.innerHeight};if(e&&(e.target&&(t.target=e.target),e.max&&(t.max=e.max),e.size&&(t.size=e.size),void 0!==e.animate&&null!==e.animate&&(t.animate=e.animate),void 0!==e.respawn&&null!==e.respawn&&(t.respawn=e.respawn),e.props&&(t.props=e.props),e.colors&&(t.colors=e.colors),e.clock&&(t.clock=e.clock),void 0!==e.start_from_edge&&null!==e.start_from_edge&&(t.start_from_edge=e.start_from_edge),e.width&&(t.width=e.width),e.height&&(t.height=e.height),void 0!==e.rotate&&null!==e.rotate&&(t.rotate=e.rotate)),"object"!=typeof t.target&&"string"!=typeof t.target)throw TypeError("The target parameter should be a node or string");if("object"==typeof t.target&&(null===t.target||!t.target instanceof HTMLCanvasElement)||"string"==typeof t.target&&(null===document.getElementById(t.target)||!document.getElementById(t.target)instanceof HTMLCanvasElement))throw ReferenceError("The target element does not exist or is not a canvas element");var c="object"==typeof t.target?t.target:document.getElementById(t.target),r=c.getContext("2d"),a=[];function o(e,t){e||(e=1);var c=Math.random()*e;return t?Math.floor(c):c}var i=t.props.reduce(function(e,t){return e+(t.weight||1)},0),n=function(){t.animate=!1,clearInterval(t.interval),requestAnimationFrame(function(){r.clearRect(0,0,c.width,c.height);var e=c.width;c.width=1,c.width=e})};return{render:function(){c.width=t.width,c.height=t.height,a=[];for(var e=0;e<t.max;e++)a.push(function(){var e=t.props[function(){for(var e=Math.random()*i,c=0;c<t.props.length;++c){var r=t.props[c].weight||1;if(e<r)return c;e-=r}}()];return{prop:e.type?e.type:e,x:o(t.width),y:t.start_from_edge?t.clock>=0?-10:parseFloat(t.height)+10:o(t.height),src:e.src,radius:o(4)+1,size:e.size,rotate:t.rotate,line:Math.floor(o(65)-30),angles:[o(10,!0)+2,o(10,!0)+2,o(10,!0)+2,o(10,!0)+2],color:t.colors[o(t.colors.length,!0)],rotation:o(360,!0)*Math.PI/180,speed:o(t.clock/7)+t.clock/30}}());return requestAnimationFrame(function e(){for(var c in r.clearRect(0,0,t.width,t.height),a)!function(e){if(e){var c=e.radius<=3?.4:.8;switch(r.fillStyle=r.strokeStyle="rgba("+e.color+", "+c+")",r.beginPath(),e.prop){case"circle":r.moveTo(e.x,e.y),r.arc(e.x,e.y,e.radius*t.size,0,2*Math.PI,!0),r.fill();break;case"triangle":r.moveTo(e.x,e.y),r.lineTo(e.x+e.angles[0]*t.size,e.y+e.angles[1]*t.size),r.lineTo(e.x+e.angles[2]*t.size,e.y+e.angles[3]*t.size),r.closePath(),r.fill();break;case"line":r.moveTo(e.x,e.y),r.lineTo(e.x+e.line*t.size,e.y+5*e.radius),r.lineWidth=2*t.size,r.stroke();break;case"square":r.save(),r.translate(e.x+15,e.y+5),r.rotate(e.rotation),r.fillRect(-15*t.size,-5*t.size,15*t.size,5*t.size),r.restore();break;case"svg":r.save();var a=new window.Image;a.src=e.src;var o=e.size||15;r.translate(e.x+o/2,e.y+o/2),e.rotate&&r.rotate(e.rotation),r.drawImage(a,-(o/2)*t.size,-(o/2)*t.size,o*t.size,o*t.size),r.restore()}}}(a[c]);(function(){for(var e=0;e<t.max;e++){var c=a[e];c&&(t.animate&&(c.y+=c.speed),c.rotate&&(c.rotation+=c.speed/35),(c.speed>=0&&c.y>t.height||c.speed<0&&c.y<0)&&(t.respawn?(a[e]=c,a[e].x=o(t.width,!0),a[e].y=c.speed>=0?-10:parseFloat(t.height)):a[e]=void 0))}a.every(function(e){return void 0===e})&&n()})(),t.animate&&requestAnimationFrame(e)})},clear:n}};document.addEventListener("DOMContentLoaded",()=>{new e({animate:!0,clock:"15",colors:[[255,255,255]],max:"40",props:["circle",{size:18,src:"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg style='fill: %23FFFFFF' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1000 1000' enable-background='new 0 0 1000 1000' xml:space='preserve'%3E%3Cg%3E%3Cg transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'%3E%3Cpath d='M4896.7,4994.7c-32.6-13.4-82.3-53.6-111.1-86.2c-47.9-57.5-51.7-74.7-51.7-233.6c0-93.9-5.7-170.5-15.3-170.5c-7.7,0-74.7,61.3-147.5,136c-168.5,168.5-218.3,197.3-339,185.8c-181.9-19.2-291.1-199.2-224.1-373.5c11.5-28.7,178.1-212.6,373.4-407.9l352.4-356.2v-329.4c0-181.9-5.7-329.4-11.5-329.4c-7.7,0-84.3,69-172.4,151.3c-114.9,111.1-176.2,157-224.1,164.7c-231.7,44-404.1-166.6-312.2-379.2c15.3-34.5,181.9-216.4,373.4-406l346.6-344.7V1513c0-388.8-5.7-704.8-15.3-704.8c-7.7,0-425.2,411.8-928.8,915.4l-913.5,913.5v526.7c0,580.3-5.7,610.9-122.6,699c-72.8,53.6-237.5,53.6-312.2-1.9c-99.6-72.8-120.6-143.6-120.6-419.4v-249l-245.1,243.2c-134.1,132.1-262.4,250.9-285.4,262.4c-23,11.5-78.5,21.1-124.5,21.1c-149.4,0-264.3-114.9-264.3-264.3c0-46,9.6-101.5,21.1-124.5c11.5-23,130.2-151.3,262.4-285.4l243.2-245.1h-249c-275.8,0-346.6-21.1-419.4-120.6c-55.5-74.7-55.5-239.4-1.9-312.2c88.1-116.8,118.7-122.6,699-122.6h526.7l915.4-915.4c501.8-501.8,913.5-919.3,913.5-928.8c0-7.7-316-13.4-704.8-13.4H2905l-344.7,346.7c-189.6,191.5-371.5,358.1-406,373.5c-214.5,93.8-429-88.1-379.2-319.8c9.6-40.2,67-114.9,164.7-218.3C2022.1,482.7,2091,406,2091,398.4c0-5.8-147.5-11.5-329.4-11.5h-329.4L1076,739.3c-195.4,195.3-379.2,361.9-407.9,373.5c-174.3,67-354.3-42.1-373.4-224.1c-11.5-120.6,17.2-170.5,185.8-339c74.7-72.8,136-139.8,136-147.5c0-9.6-78.5-15.3-174.3-15.3H267.8L195,314.1C68.6,189.6,68.6,49.8,193.1-76.6l74.7-72.8h174.3c95.8,0,174.3-5.7,174.3-15.3c0-7.7-61.3-74.7-136-147.5c-168.5-168.5-197.3-218.3-185.8-339C313.8-833,493.8-942.2,668.1-875.2c28.7,11.5,212.6,178.1,407.9,373.5l356.2,352.4h329.4c181.9,0,329.4-5.7,329.4-15.3c0-7.7-65.1-78.5-143.6-157.1c-93.8-93.8-151.3-168.5-166.6-214.5c-68.9-231.7,151.3-429,373.5-333.2c34.5,15.3,216.4,181.9,406,373.5L2905-149.3h702.9c388.8,0,704.8-5.7,704.8-13.4c0-9.6-411.8-427.1-913.5-928.8L2483.6-2007H1957c-580.3,0-610.9-5.7-699-122.6c-53.6-72.8-53.6-237.5,1.9-312.2c72.8-99.6,143.6-120.7,419.4-120.7h249L1685-2807.5c-132.1-134.1-250.9-262.4-262.4-285.4c-11.5-23-21.1-78.5-21.1-124.5c0-149.4,114.9-264.3,264.3-264.3c46,0,101.5,9.6,124.5,21.1c23,11.5,151.3,130.2,287.3,262.4l243.2,243.2v-249c0-275.8,21.1-346.6,120.6-419.4c76.6-57.5,231.7-55.5,312.2,1.9c116.8,82.3,122.6,118.7,122.6,697.1v524.7l913.5,913.5c503.7,503.7,921.2,915.4,928.8,915.4c9.6,0,15.3-316,15.3-704.8v-702.9L4387.3-2323c-191.5-189.6-358.1-371.5-373.4-406c-93.8-214.5,88.1-429,319.8-379.2c40.2,9.6,114.9,67,218.3,164.7c86.2,82.4,162.8,151.3,170.4,151.3c5.8,0,11.5-147.5,11.5-329.4V-3451l-352.4-356.2c-195.4-195.4-362-379.2-373.4-407.9c-67-174.3,42.1-354.3,224.1-373.4c120.7-11.5,170.4,17.2,339,185.8c72.8,74.7,139.8,136,147.5,136c9.6,0,15.3-76.6,15.3-172.4c0-164.7,1.9-174.3,59.4-239.4c116.8-134.1,300.7-134.1,417.5,0c57.5,65.1,59.4,74.7,59.4,239.4c0,95.8,5.7,172.4,15.3,172.4c7.7,0,74.7-61.3,147.5-136c168.5-168.5,218.3-197.3,339-185.8c182,19.2,291.1,199.2,224.1,373.4c-11.5,28.7-178.1,212.6-373.5,407.9L5270.2-3451v329.4c0,181.9,5.7,329.4,11.5,329.4c7.7,0,84.3-68.9,172.4-151.3c114.9-111.1,176.2-157,224.1-164.7c231.7-44,404.1,166.6,312.2,379.2c-15.3,34.5-181.9,216.4-373.5,406l-346.6,344.7v702.9c0,388.8,5.7,704.8,15.3,704.8c7.7,0,425.2-411.7,928.8-915.4l913.5-913.5v-524.7c0-578.4,5.7-614.8,122.6-697.1c80.4-57.5,235.6-59.4,312.2-1.9c99.6,72.8,120.6,143.6,120.6,419.4v249l245.1-243.2c134.1-132.1,262.4-250.9,285.4-262.4c23-11.5,78.5-21.1,124.5-21.1c149.4,0,264.3,114.9,264.3,264.3c0,46-9.6,101.5-21.1,124.5c-11.5,23-130.2,151.3-262.4,287.3l-243.2,243.2h249c275.8,0,346.6,21.1,419.4,120.7c57.5,76.6,55.5,231.7-1.9,312.2c-82.3,116.8-118.7,122.6-699,122.6h-522.8L6605-1091.6c-501.8,501.8-913.5,919.3-913.5,928.8c0,7.7,316,13.4,704.8,13.4h702.9L7443.8-496c189.6-191.5,371.5-358.1,406-373.5c214.5-93.8,429,88.1,379.2,319.8c-9.6,40.2-67,114.9-164.7,218.3C7982-245.1,7913-168.5,7913-160.8c0,5.7,147.5,11.5,329.4,11.5h329.4l356.2-352.4c195.4-195.4,379.2-362,407.9-373.5c174.3-67,354.3,42.1,373.5,224.1c11.5,120.7-17.2,170.4-185.8,339c-74.7,72.8-136,139.8-136,147.5c0,9.6,76.6,15.3,172.4,15.3c164.7,0,174.3,1.9,239.4,59.4c134.1,116.8,134.1,300.7,0,417.5c-65.1,57.5-74.7,59.4-239.4,59.4c-95.8,0-172.4,5.7-172.4,15.3c0,7.7,61.3,74.7,136,147.5c168.5,168.5,197.3,218.3,185.8,339c-19.2,181.9-199.2,291.1-373.5,224.1c-28.7-11.5-212.6-178.1-407.9-373.5l-356.2-352.4h-329.4c-181.9,0-329.4,5.7-329.4,11.5c0,7.7,68.9,84.3,151.3,172.4c160.9,164.7,191.5,231.7,164.7,350.5c-36.4,168.5-239.4,264.3-388.8,185.8c-28.7-15.3-206.8-183.9-396.4-373.5l-344.7-346.7h-702.9c-388.8,0-704.8,5.7-704.8,15.3c0,7.7,411.8,425.2,915.4,928.8l913.5,913.5h524.8c578.4,0,614.7,5.7,697.1,122.6c57.5,80.4,59.4,235.6,1.9,312.2c-72.8,99.6-143.6,120.6-419.4,120.6h-249l243.2,245.1c132.1,134.1,250.9,262.4,262.4,285.4c11.5,23,21.1,78.5,21.1,124.5c0,149.4-114.9,264.3-264.3,264.3c-46,0-101.5-9.6-124.5-21.1c-23-11.5-151.3-130.2-285.4-262.4l-245.1-243.2v249c0,275.8-21.1,346.7-120.6,419.4c-74.7,55.5-239.4,55.5-312.2,1.9c-116.8-88.1-122.6-118.7-122.6-699v-526.7l-913.5-913.5c-503.7-503.7-921.2-915.4-928.8-915.4c-9.6,0-15.3,316-15.3,704.8v702.9l346.6,344.7c191.5,189.6,358.1,371.5,373.5,406C6086,3188.7,5888.7,3409,5657,3340c-46-15.3-120.7-72.8-214.5-166.6c-78.5-78.5-149.4-143.6-157.1-143.6c-9.6,0-15.3,147.5-15.3,329.4v329.4l352.4,356.2c195.4,195.3,362,379.2,373.5,407.9c67,174.3-42.1,354.3-224.1,373.5c-120.7,11.5-170.4-17.2-339-185.8c-72.8-74.7-139.8-136-147.5-136c-9.6,0-15.3,76.6-15.3,170.5c0,157-3.8,176.2-49.8,231.7C5126.5,5015.8,5015.4,5046.4,4896.7,4994.7z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A",type:"svg",weight:.1}],respawn:!0,rotate:!1,size:"1",start_from_edge:!1,target:"letitsnow"}).render()});
//# sourceMappingURL=index.b9a7a9fd.js.map
