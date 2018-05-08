package main
 
import (
    gonode "github.com/jgranstrom/gonodepkg"
    json "github.com/jgranstrom/go-simplejson"
	lyra2rev2 "github.com/bitgoin/lyra2rev2"
	"encoding/hex"
)
 
func main() {	
    gonode.Start(process)
}

func process(cmd *json.Json) (response *json.Json) {	
    response, m, _ := json.MakeMap();
	
	data, err := hex.DecodeString(cmd.Get("commandText").MustString());
	if(err != nil) {
		m["responseText"] = "0";
		return;
	}
	
 	result, err := lyra2rev2.Sum(data)
	if(err != nil) {
		m["responseText"] = "1";
		return;
	}
	
	m["responseText"] = hex.EncodeToString(result);
 
    return
}