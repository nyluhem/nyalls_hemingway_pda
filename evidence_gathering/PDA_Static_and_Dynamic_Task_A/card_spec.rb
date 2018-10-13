require("minitest/autorun")
require("minitest/rg")
require_relative("./testing_task_2.rb")

class TestCard < MiniTest::Test

  def setup
    @card_1 = Card.new("Clubs", 3)

    @card_2 = Card.new("Hearts", 1)

    @cards = [@card_1, @card_2]
  end

  def test_card_has_suit()
    assert_equal("Clubs", @card_1.suit)
  end

  def test_card_has_value()
    assert_equal(1, @card_2.value)
  end

  def test_card_check_for_ace__true()
    assert_equal(true, CardGame.check_for_ace(@card_2))
  end

  def test_card_check_for_ace__false
    assert_equal(false, CardGame.check_for_ace(@card_1))
  end

  def test_highest_card()
    assert_equal(@card_1, CardGame.highest_card(@card_1, @card_2))
  end

  def test_cards_total
    assert_equal("You have a total of 4", CardGame.cards_total(@cards))
  end

end
