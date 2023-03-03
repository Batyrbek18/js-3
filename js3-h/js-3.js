var bat = ['milk', 'beer', 'beer', 'milk', 'milk']
var bad = ['beer']
for (var z=0;z<bat.length;z++) {
   if (bad.includes(bat[z].toLowerCase())) {
    console.log(` Bad`);
    continue
   }
   console.log(`Good `);
}