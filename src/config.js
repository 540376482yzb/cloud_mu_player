const configOption = {
  development: {
    api: 'https://us-central1-cloud-mu-player.cloudfunctions.net/app/api/'
  }
}

export const config = configOption[process.env.NODE_ENV || 'development']
