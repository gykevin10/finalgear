import React, { useEffect, useState } from "react"

const SpreadsheetData = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const spreadsheetId = "1AMRvGTzrSy38UZ1vhuYzf79wbW5zLYZspY5fD6Kq-N4"
        const range = "'PlageNommée1'!A1:Q102"
        const apiKey = "AIzaSyDxw0lUC0G6BVKjBKc_qI7SX_iMVw_zJwU"

        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`

        const response = await fetch(url)
        const jsonData = await response.json()

        const values = jsonData.values || []
        setData(values)
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error)
      }
    }

    fetchSheetData()
  }, [])

  return (
    <div>
      {data.map((row, index) => (
        <div key={index}>
          {row.map((cell, cellIndex) => (
            <span key={cellIndex}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default SpreadsheetData
