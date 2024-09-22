import styled from "styled-components";

const S = {
  List: styled.ul`
    list-style: none;
    margin: 0;
    padding: 0 10px;
    font-size: 16px;
    color: var(--color5);
    text-align: right;
  `,
};

export const Lines = () => {
  return (
    <S.List>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
    </S.List>
  );
};
