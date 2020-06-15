module.exports = 
{
  /*  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://192.168.0.10/sigeal/'
    : '/'*/
    devServer: {
        proxy:
        {
            '/api/*': 
            {
                target: 'http://192.168.0.130:4500/',
                ws: true,
                changeOrigin: true
            }
        },
    }
}       