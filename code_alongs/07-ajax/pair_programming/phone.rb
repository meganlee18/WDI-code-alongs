class Phone
  def initialize(str)
    @num = str.gsub(/\D/, "")
  end

  def number
    if @num[0] == "1" && @num.length > 10
      @num[1..-1]
    elsif @num[0] == "2" || @num.length < 10
      "0000000000"
    else
      @num
    end
  end

  def area_code
    @num[0..2]
  end

  def to_s
    "(" + @num[0..2] + ")" + " " + @num[3..5] + "-" + @num[6..-1]
  end
end
