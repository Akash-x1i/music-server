const path = require("path");
const express = require("express")
const router = express.Router()
const { spawn } = require("child_process");


router.get("/:query", (req, res, next) => {
    // req.query = query;
    search(req, res);
})


const search = (req, res ) => {
        console.log("running search: ", req.params.query)
        const search = spawn("python", ["search.py", req.params.query])
        let output = "";

        search.stdout.on("data", (data) => {
            output += data.toString();
        });

        search.stderr.on("data", (data) => {
            console.error(`stderr: ${data}`);
        });

        search.on("close", (code) => {
            console.log(`Python process exited with code ${code}`);
            let filename = output.split("?v=")[1].trimEnd().concat(".mp3")
            // filename = filename.split("&")[0];
            console.log(output,"\ntrying to locate: ", filename)

           try {
                const filePath = path.join(__dirname,"..", "local", "yt", filename);
                console.log(filePath, filename)
                res.download(filePath, filename, (err) => {
                if (err) {
                    console.log("starting download.py\n", output);
                    const download = spawn("python", ["download.py", output]);
                    let out = "";

                    download.stdout.on("data", (data) => {
                        out += data.toString();
                    });
                    download.stderr.on("data", (data) => {
                        console.error(`stderr: ${data}`);
                    });
                    download.on("close", (code) => {
                        console.log(`Python process exited with code ${code}`);
                        res.download(filePath, filename)
                        console.log("Download successfull!\n\n")
                    })
                } else {
                    console.log("Download started successfully!");
                }
                });
            } catch (error) {
                console.error("Unexpected error:", error);
                res.status(500).send("Internal Server Error");
            }
        });
    }


module.exports = router;