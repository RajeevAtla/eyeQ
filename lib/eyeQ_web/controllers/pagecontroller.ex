defmodule EyeQWeb.PageController do use EyeQWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def create(conn, %{"upload" => %Plug.Upload{} = upload}) do
    result = TesseractOcr.read(upload.path)
    render(conn, "show.html", result: result)
  end
end
