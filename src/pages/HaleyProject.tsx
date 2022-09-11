/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import { useState } from "react"
import Page from "../components/PageElements/Page"
import { usePage } from "../Utils"
import { Button, IconButton } from "gatsby-theme-material-ui"
import { TextField } from "@mui/material"
import FileUploadIcon from "@mui/icons-material/FileUpload"
import readXlsxFile from "read-excel-file"
import writeXlsxFile from "write-excel-file"

const HaleyProject = () => {
	const pageData = usePage("HaleyProject")
	const [ file, setFile ] = useState(null)
	const [ d, setD ] = useState(null)

	const handleUploadInput = (event) => {
		console.log(event.target.files)
		setFile(event.target.files[0])
	}

	const process = () => {
		readXlsxFile(file).then((rows) => {
			// `rows` is an array of rows
			// each row being an array of cells.
			// loop through each row

			const header = rows[0]
			console.log(header)

			let data = {
				"Monday"   : {},
				"Tuesday"  : {},
				"Wednesday": {},
				"Thursday" : {},
				"Friday"   : {},
				"Saturday" : {},
				"Sunday"   : {}
			}

			for (let i = 1; i < rows.length; i++) {
				// get the date time from the first cell
				let row = rows[i]
				// replace all nulls with 0
				row = row.map((cell) => {
					if (cell === null) {
						return 0
					}
					return cell
				})

				let date = row[0]
				// console.log(date)
				// process the date string into a date object using format Fri Aug 26 2022 05:00:37 GMT-0400 (Eastern Daylight Time)
				const dateObj = new Date(date.toISOString().slice(0, -1))
				// get the time from the date and
				// round to the nearest 30 minutes
				const minRounded = Math.round(dateObj.getMinutes() / 30) * 30
				const time = dateObj.getHours() + ":" + (minRounded === 0 ? "00" : minRounded)

				// get the day of the week from the date
				const day = dateObj.toLocaleString("default", { weekday: "long" })
				console.log(`day: ${day} time: ${time}`)

				// everything but the first cell and the last cell
				let timeCounts = row.slice(1, row.length - 2)
				console.log(timeCounts)

				// add the values for each column to the data object at the computed time
				for (let j = 0; j < timeCounts.length; j++) {
					const count = timeCounts[j]
					const column = header[j + 1]
					if (data[day][time] === undefined) {
						data[day][time] = {}
					}
					data[day][time][column] = count
				}
			}

			console.log(data)

			let dataGridData = {
				"Monday"   : [],
				"Tuesday"  : [],
				"Wednesday": [],
				"Thursday" : [],
				"Friday"   : [],
				"Saturday" : [],
				"Sunday"   : []
			}
			// incorporate the time as a dictionary key for each row
			for (let day in data) {
				for (let time in data[day]) {
					let row = { "time": time }
					for (let column in data[day][time]) {
						row[column] = data[day][time][column]
					}
					dataGridData[day].push(row)

				}
			}

			console.log(dataGridData)
			setD(dataGridData)
		})
	}

	const schema = [
		{ column  : "time",
			type  : String,
			value : (row) => row.time,
		}, {
			column: "3D printing",
			type  : Number,
			value : (row) => row["3D printing"]
		}, {
			column: "3D/AR/VR Computer",
			type  : Number,
			value : (row) => row["3D/AR/VR Computer"]
		}, {
			column: "Arduino",
			type  : Number,
			value : (row) => row["Arduino"]
		}, {
			column: "Art",
			type  : Number,
			value : (row) => row["Art"]
		}, {
			column: "Buttons",
			type  : Number,
			value : (row) => row["Buttons"]
		}, {
			column: "Electronics",
			type  : Number,
			value : (row) => row["Electronics"]
		}, {
			column: "Finishing Station",
			type  : Number,
			value : (row) => row["Finishing Station"]
		}, {
			column: "Hand Tools",
			type  : Number,
			value : (row) => row["Hand Tools"]
		}, {
			column: "Information",
			type  : Number,
			value : (row) => row["Information"]
		}, {
			column: "Lego",
			type  : Number,
			value : (row) => row["Lego"]
		}, {
			column: "MakeBlock",
			type  : Number,
			value : (row) => row["MakeBlock"]
		}, {
			column: "Microtext",
			type  : Number,
			value : (row) => row["Microtext"]
		}, {
			column: "Raspberry Pi",
			type  : Number,
			value : (row) => row["Raspberry Pi"]
		}, {
			column: "Robotics",
			type  : Number,
			value : (row) => row["Robotics"]
		}, {
			column: "Sandbox",
			type  : Number,
			value : (row) => row["Sandbox"]
		}, {
			column: "Sewing",
			type  : Number,
			value : (row) => row["Sewing"]
		}, {
			column: "Soldering",
			type  : Number,
			value : (row) => row["Soldering"]
		}, {
			column: "Studying",
			type  : Number,
			value : (row) => row["Studying"]
		}, {
			column: "Tour",
			type  : Number,
			value : (row) => row["Tour"]
		}, {
			column: "Vinyl Cutter",
			type  : Number,
			value : (row) => row["Vinyl Cutter"]
		}, {
			column: "Wacom Computer",
			type  : Number,
			value : (row) => row["Wacom Computer"]
		}, {
			column: "Waiting on printer",
			type  : Number,
			value : (row) => row["Waiting on printer"]
		}
	]

	const handleDownload = async () => {
		for (let day in d) {
			const data = d[day]
			await writeXlsxFile(data, {
				schema,
				fileName: `${day}.xlsx`,
			})
		}
	}
	return <Page pageProps={pageData}>

		<TextField
			value={file && file.name || "No File Chosen"}
			label="Select XLSX File to Process"
			sx={{ m: 2 }}
			InputProps={{
				fullWidth     : true,
				startAdornment: (<IconButton component="label">
						<FileUploadIcon/>
						<input
							type="file"
							hidden
							onChange={handleUploadInput}
							name="[name]"
						/>
					</IconButton>)
			}}></TextField>
		{file && <Button variant="contained" sx={{ m: 2 }} onClick={process}>Process</Button>}
		{d && <Button variant="contained" sx={{ m: 2 }} onClick={handleDownload}>
            Download
        </Button>}
	</Page>
}

export default HaleyProject