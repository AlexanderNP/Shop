import "./style.pcss"
import "../widgets/header/style.pcss"
import "../widgets/footer/style.pcss"
import HeaderModel from "../widgets/header/model"

const runApp = async () => {
    const runWidgets = () => {
        new HeaderModel()
    }
    switch (process.env.NODE_ENV) {
        case "development":
            await import("../shared/api/browser")
                .then(async ({ worker }) => {
                    await worker.start().then(() => {
                        console.debug("App dev run")
                        runWidgets()
                    })
                })
    }
}

runApp()
    .catch((err) => {
        console.error(err)
    })
