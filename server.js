const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

//call router
let petugas = require("./router/petugas")
let kelas = require("./router/kelas")
let spp = require("./router/spp")
let siswa = require("./router/siswa")
let pembayaran = require("./router/pembayaran")
let auth = require("./router/auth")

app.use("/spp/petugas", petugas)
app.use("/spp/kelas", kelas)
app.use("/spp/spp", spp)
app.use("/spp/siswa", siswa)
app.use("/spp/pembayaran", pembayaran)
app.use("/spp/auth", auth)

app.use(express.static(__dirname))

app.listen(8000, ()=> {
    console.log(`server berjalan di port 8000`)
})